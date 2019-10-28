function  Confirm(props){
    let content  = props;
    let result = window.confirm(content);
    const promise = new Promise(function (resolve, reject) {
        if (result) {
            resolve('挂载成功');
        } else {
            reject('挂载失败')
        }

    });
    return promise;
};

 export default Confirm
