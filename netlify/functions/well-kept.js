const openaiKey = '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';  // Replace with your actual Supabase key

exports.handler = async (event) => {
    // Access the 'name' parameter from the query string
    const name = event.queryStringParameters ? event.queryStringParameters.name : null;

    // Define a mapping for the available keys
    const keys = {
        openaiKey: openaiKey
    };

    // Check if the requested 'name' exists in the keys object
    if (name && keys[name]) {
        // Return the corresponding key value
        return {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': 'https://liamland.netlify.app'
            },
            body: JSON.stringify(keys[name])
        };
    } else {
        // If the key is not found, return an error message
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: ''
            })
        };
    }
};
