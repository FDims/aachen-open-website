// This utility converts Google's 2D array into a clean JSON array.
function sheetsDataToJSON(data: any[][]) {
    const headers = data[0];
    const jsonData = [];

    for (let i = 1; i < data.length; i++) {
        const row = data[i];
        const item: { [key: string]: any } = {};
        for (let j = 0; j < headers.length; j++) {
            item[headers[j]] = row[j];
        }
        jsonData.push(item);
    }
    return jsonData;
}


// This is the main server route handler
// We use cachedEventHandler to cache the response for 60 seconds.
export default cachedEventHandler(async (event) => {
    console.log("FETCHING NEW DATA FROM GOOGLE SHEETS...");

    // 1. Get secrets from runtime config
    const { googleSpreadsheetId, googleApiKey } = useRuntimeConfig(event);

    // 2. Define the *multiple* sheets and ranges you want to get
    //    (You can add/remove any sheets you need here)
    const sheetsToFetch = [
        "VolleyballTeams!A:H",
        "Schedule!A:L",
        "FutsalTeams!A:L",
        "BadmintonMixedDouble!A:H",
        "BadmintonMenDouble!A:H",
        "BasketballTeams!A:H"
    ];

    // Build the URL for batchGet
    const rangeParams = sheetsToFetch.map(r => `ranges=${encodeURIComponent(r)}`).join('&');
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${googleSpreadsheetId}/values:batchGet?${rangeParams}&key=${googleApiKey}`;

    try {
        // 3. Fetch data from Google Sheets API
        const response = await $fetch(url) as { valueRanges: { range: string, values: any[][] }[] };

        if (!response || !response.valueRanges) {
            throw new Error("No data found in sheets.");
        }

        // Convert each sheet's 2D array to a clean JSON object array
        // then return the clean data as an object of sheets
        return response.valueRanges.reduce((acc, valueRange) => {
            // Extract the sheet name from the 'range' string (e.g., "VolleyballTeams!A:H")
            const sheetName = valueRange.range.split('!')[0].replace(/'/g, ''); // Removes quotes if sheet name has spaces

            if (valueRange.values) {
                acc[sheetName] = sheetsDataToJSON(valueRange.values);
            } else {
                acc[sheetName] = []; // Handle empty sheets
            }
            return acc;
        }, {} as { [key: string]: any[] });

    } catch (error) {
        console.error("Error fetching sheet data:", error);
        // Return a proper error response
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch data from Google Sheets."
        });
    }
}, {
    // Cache the response for 60 seconds
    maxAge: 60
})

