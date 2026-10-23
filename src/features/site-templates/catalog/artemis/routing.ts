/** 链接按挂载前缀生成，供服务端与客户端共用。 */
export const hrefFor = (basePath: string, slug = '') => (basePath || '') + '/' + slug;
