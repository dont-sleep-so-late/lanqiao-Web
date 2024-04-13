/**
 * @param {iterable} iterable 可迭代对象
 * @return {promise}
 */
function myRace(iterable) {
    // TODO：待补充代码  
    
 }


// 以下代码不需要修改
const random = Math.random();
const output = document.getElementById("output"); // 下载输出
const startButton = document.getElementById("startButton"); // 下载按钮
let isDownloading = false; //是否已经开始下载
// 定义不同下载源的下载任务，链接仅为函数模拟使用，不存在联网情况 
const downloadTasks = [
    ()=> executeTask("quick", "https://quick.lanqiao.com/"),
    ()=>executeTask("learn", "https://learn.lanqiaoshiyan.com/"),
    ()=> executeTask("study", "https:/study.lanqiao.com/"),
 ];
// 下载进度
function simulateDownload(source, httpLink, result) {
    output.textContent = `The current download source ${source},npm http fetch GET 200  ${httpLink}/\n`;
    output.textContent += "Downloading packages...\n";

    setTimeout(() => {
        output.textContent += "Fetching package 1/5...\n";
    });

    setTimeout(() => {
        output.textContent += "Fetching package 2/5...\n";
    }, 500);

    setTimeout(() => {
        output.textContent += "Fetching package 3/5...\n";
    }, 1000);

    setTimeout(() => {
        output.textContent += "Fetching package 4/5...\n";
    },1500);

    setTimeout(() => {
        if (result == "complete") {
            output.textContent += "Fetching package 5/5...\n";
            output.textContent += `Download ${result}!\n`;
        } else {
            output.textContent += "Fetching package 4/5...\n";
            output.textContent += `Download ${result}!\n`;
        }
    }, 2000);
}

// 点击开始匹配最快的下载源进行下载，并拿到下载成功失败的结果
startButton.addEventListener("click", () => {
    startButton.style.display = 'none';
    myRace(downloadTasks).then(
        ({ source, httpLink }) => {
            isDownloading = true;
            simulateDownload(source, httpLink, "complete");
        },
        ({ source, httpLink }) => {
            isDownloading = true;
            simulateDownload(source, httpLink, "fail");
        }
    );

});

// 匹配最快的下载源进行下载
function executeTask(source, httpLink) {
    return new Promise((resolve, reject) => {
        //executionTime 定义不同下载源的下载速度
        const executionTime = Math.random() * 300 ;
        // 设置需要下载的进度 100%
        let downloadPercentage = 100;
        const decreaseAmount = 100 / executionTime;

        if (random < 0.5) {
            setTimeout(() => {
                reject({ source, httpLink }); //下载失败
            }, executionTime);
        }
        interval = setInterval(() => {
            if (isDownloading) return clearInterval(interval);
            downloadPercentage -= decreaseAmount;
            if (downloadPercentage <= 0) {
                clearInterval(interval);
                resolve({ source, httpLink }) //下载成功
            }

        }, 10);
    });
}

