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
