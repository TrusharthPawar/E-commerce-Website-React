export default function parseurl() {
    var geturl = document.location.pathname;
    var parseurl = geturl.split('/')
    return {
        resource: parseurl[1],
        id:parseurl[2]
    }
}