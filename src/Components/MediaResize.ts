
const MediaResize = (url:string) => {
    const path= 'media/'
    const index = url.indexOf(path)+ path.length
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}
export default MediaResize  

