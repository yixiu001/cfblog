var posts=["2024/11/29/sublink-worker/","2024/11/27/telegrambotdev/","2024/11/27/hongxingyun/","2024/11/27/xiaodiqiuyi/","2024/11/17/tuchuang/","2024/11/15/l53domain/","2024/11/08/gnamedomain/","2024/11/07/zidongjiedian/","2024/11/04/wuxiangmail/","2024/09/08/serv00-singbox/","2024/09/07/ssh/","2024/08/06/serv00-re-ProxySite/","2024/08/03/segfault-faq/","2024/08/03/segfault/","2024/07/13/freeboundlessemail/","2024/07/12/serv00-re/","2024/07/11/meiquappleid-md/","2024/07/11/cloudnsdomainsre-md/","2024/07/11/uskgdomainsre-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };