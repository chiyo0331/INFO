//宣告預設表單內容為空 （你想要的話也可以加東西）
var initSubject = '',
    initBody = '';

//按下傳送按鈕後執行
function submitHandler() {
    var to = "rtyu78949@yahoo.com"; //寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
    var nameText = nickname.value; //讀取ID為 nameTextuser 物件中的值
    var telText = phone.value;
    var subject = subject.value;
    var bodyText = bodytext.value;
    //把user填的資料都塞到 mail body 中
    var body = "" + bodyText.value + '%0A%0A%0A';
    body += "From：" + nameText.value + '%0A';
    body += "subject：" + subjectText.value + '%0A';
    body += "Tel：" + telText.value;
    //傳送的主要程式碼
    mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    mailTo.click();
}
//在body onload
function init() {
    subText.value = initSubject;
    toText.value = initTo;
    bodyText.value = initBody;
}