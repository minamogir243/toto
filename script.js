// リダイレクト先のURLを指定
const redirectUrl = "https://sites.google.com/view/totoserver/home";  // リダイレクト先のURLを指定してください

// 3秒後にリダイレクト
setTimeout(() => {
    window.location.href = redirectUrl;
}, 3000);
