$(function () {
    let url = window.location.href
    if (getParamfunction('sortColumn', url) === null) {
        if (url.match(/\/trash/)){
            location.replace('?sortColumn=deleted&sortDirection=DESC')
        } else if (url.match(/\/folder/) && !url.match(/search/)){
            location.replace('?sortColumn=name&sortDirection=ASC')
        }
    }

    /**
     * Get the URL parameter value
     *
     * @param  name {string} パラメータのキー文字列
     * @return  url {url} 対象のURL文字列（任意）
     */
    function getParamfunction (name, url) {
        if (!url) url = window.location.href
        name = name.replace(/[\[\]]/g, "\\$&")
        let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url)
        if (!results) return null
        if (!results[2]) return ''
        return decodeURIComponent(results[2].replace(/\+/g, " "))
    }
});
