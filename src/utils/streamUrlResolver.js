const remoteUrl = mount =>
    `https://eu-playerservices.streamtheworld.com/api/livestream?mount=${mount}&transports=http%2Chls&version=1.10`;

const streamUrlResolver = async mount => {
    const targetUrl = remoteUrl(mount);

    return new Promise((resolve, reject) => {
        fetch(targetUrl)
            .then(res => res.text())
            .then(xml => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(xml, "application/xml");
                const finalUrl = `https://${doc.querySelector("servers server ip").textContent}/${mount}.aac`;
                resolve(finalUrl);
            });
    });
};

export default streamUrlResolver;