const openaiKey = '';  // Replace with your actual Supabase key

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
