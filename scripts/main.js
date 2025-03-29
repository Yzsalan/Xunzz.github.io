// 一、函数和alert事件
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }
//   alert("你好！");
// document.querySelector("html").addEventListener("click", function () {
//   alert("别戳我，我怕疼！");
// });

// 二、onclick事件处理器实现 图片切换器
// 获取这张图片的 src 属性值。
// 1.用一个条件句来判断 src 的值是否等于原始图片的路径：
// -如果是，则将 src 的值改为第二张图片的路径，在 <img> 内强制加载第二张图片。
// -如果不是, 则把 src 的值重新设置为原始图片的路径，即原始状态。
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mumu.jpeg") {
    myImage.setAttribute("src", "images/mumu1.jpeg");
  } else {
    myImage.setAttribute("src", "images/mumu.jpeg");
  }
};

// 三、个性化欢迎信息
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
//setUserName() 函数包含一个 prompt() 函数，与 alert() 类似会弹出一个对话框。prompt() 函数的功能更多，需要用户输入数据，并在用户点击确定后将数据存储在一个变量中。
// 在这个例子里，我们要求用户输入一个名字。
// 接下来，代码调用 localStorage API，它允许我们将数据存储在浏览器中并供后续获取。
function setUserName() {
    const myName = prompt("Please enter your name.");
    //检查用户没有输入空名字
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
//初始化代码，它在初次加载时开始工作。
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, ${storedName}`;
  }
  myButton.onclick = function () {
    setUserName();
  };
  