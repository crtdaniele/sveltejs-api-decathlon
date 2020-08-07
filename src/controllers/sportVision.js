const sportVision = async (apiKey, url, files) => {

    const formData = new FormData();
    formData.append('file', files[0]);

    let options = {
        method: "POST",
        headers: {
            'Authorization': apiKey
        },
        body: formData
    }

    return await fetch(url, options)
    .then(response => response.json())
    .then(data => data);

}

export default sportVision;