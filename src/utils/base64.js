
export  const getUrlBase64 =  (url) => {
    return new Promise((resolve, reject) => {
        let canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        let img = new Image();
        img.crossOrigin = "Anonymous"; //解决Canvas.toDataURL 图片跨域问题
        img.src = url;
        img.onload = function () {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0, img.width, img.height); //参数可自定义
            const dataURL = canvas.toDataURL("image/jpeg", 1); //获取Base64编码
            resolve(dataURL);
            canvas = null; //清除canvas元素
            img = null; //清除img元素
        };
        img.onerror = function () {
            reject(new Error("Could not load image at " + url));
        };
    });
}