let desW = 640;
let winW = document.documentElement.clientWidth;
document.documentElement.style.fontSize = winW / desW * 100 + "px";
let mySwiper = new Swiper('.swiper-container', {
    // direction: 'horizontal',
    direction: 'vertical',
    loop: true,
    onInit: function () {
        /*  showWx();*/
        wxBrowser();
        showProjectInfo();
        typedFunction();
    },
    onTransitionEnd: function (swiper) {
        let curIndex = swiper.activeIndex;
        let slides = swiper.slides;
        [].forEach.call(slides, function (item, index) {
            item.id = "";
            if (index == curIndex) {
                switch (index) {
                    case 0:
                        item.id = "src-" + (slides.length - 2);
                        break;
                    case slides.length - 1:
                        item.id = "src-1";
                        break;
                    default:
                        item.id = "src-" + index;
                }
            }
        })
    }
});
let music = document.querySelector(".music");
let river = document.querySelector("#river");
window.setTimeout(function () {
    river.play();
    music.style.opacity = 1;
    music.className = "music musicMove";
}, 1000);
music.addEventListener("click", function () {
    if (river.paused) {
        river.play();
        music.className = "music musicMove";
    } else {
        river.pause();
        music.className = "music";
    }
}, false);


function typedFunction() {
    $(function () {
        $(".typed-1").typed({
            stringsElement: $('.typed-strings-1'),
            typeSpeed: 6,
            backDelay: 9999999,
            loop: true,
            contentType: 'html',
            loopCount: false,
            callback: function () {
            },
            resetCallback: function () {
            }
        });
    });
    $(function () {
        $(".typed-2").typed({
            stringsElement: $('.typed-strings-2'),
            typeSpeed: 60,
            backDelay: 5000,
            loop: true,
            contentType: 'html',
            loopCount: false,
            callback: function () {
            },
            resetCallback: function () {
            }
        });
    });
    $(function () {
        $(".typed-3").typed({
            stringsElement: $('.typed-strings-3'),
            typeSpeed: 60,
            backDelay: 5000,
            loop: true,
            contentType: 'html',
            loopCount: false,
            callback: function () {
            },
            resetCallback: function () {
            }
        });
    });
    $(function () {
        $(".typed-4").typed({
            stringsElement: $('.typed-strings-4'),
            typeSpeed: 60,
            backDelay: 5000,
            loop: true,
            contentType: 'html',
            loopCount: false,
            callback: function () {
            },
            resetCallback: function () {
            }
        });
    });
    $(function () {
        $(".typed-5").typed({
            stringsElement: $('.typed-strings-5'),
            typeSpeed: 60,
            backDelay: 5000,
            loop: true,
            contentType: 'html',
            loopCount: false,
            callback: function () {
            },
            resetCallback: function () {
            }
        });
    });
}

function showProjectInfo() {
    let blog = document.querySelector('#blog');
    let bookShop = document.querySelector('#bookShop');
    let vote = document.querySelector('#vote');
    blog.addEventListener('click', function () {
        createProjectInfo({
            name: '个人博客',
            role: '设计/前端/后台',
            desc: '个人博客,功能:用户注册/登录/登出,发表文章/查看文章/编辑文章/删除文章/文章评论等',
            analy: '<p>前端:bootstrap+angular</p>'
            + '<p>后台:express</p>',
            url: ''
        });
    });
    bookShop.addEventListener('click', function () {
        createProjectInfo({
            name: '岛上书店',
            role: '设计/前端/后台',
            desc: '图书交换的网站,功能:用户注册/登录,查看图书/添加图书/编辑图书/删除图书/书籍评论等',
            analy: '<p>前端:bootstrap+angular</p>'
            + '<p>后台:express</p>',
            url: ''
        });
    });
    vote.addEventListener('click', function () {
        createProjectInfo({
            name: '微信投票系统',
            role: '前端/后台',
            desc: '微信投票,功能:用户注册/登录,投票/搜索/个人信息页/实时排名等',
            analy: '<p>前端:bootstrap+angular</p>'
            + '<p>后台:express</p>',
            url: ''
        });
    })
}

function createProjectInfo(project) {
    let src5 = document.querySelector('.src-5');
    let projectInfo = document.createElement('div');
    projectInfo.className = 'projectInfoWrap comeIn';
    let mask = document.createElement('div');
    mask.className = 'mask';
    let str = '<h3 class="projectInfoTitle">' + project.name + '</h3>'
        + '<div class="projectInfoRole">'
        + '    <h4><span>项目角色</span></h4>'
        + '    <p>' + project.role + '</p>'
        + '</div>'
        + '<div class="projectInfoDesc">'
        + '    <h4><span>项目描述</span></h4>'
        + '    <p>' + project.desc + '</p>'
        + '</div>'
        + '<div class="projectInfoAnalysis">'
        + '    <h4><span>项目分析</span></h4>'
        + '    <p>' + project.analy + '</p>'
        + '</div>'
        + '<div class="projectInfoUrl">'
        + '    <h4><span>项目地址</span></h4>'
        + '    <a href="' + project.url + '">' + project.url + '</a>'
        + '</div>'
        + '<div class="projectInfoFooter"><div class="closeBtn">关闭</div></div>';
    projectInfo.innerHTML = str;
    src5.appendChild(mask);
    src5.appendChild(projectInfo);
    let closeBtn = document.querySelector('.closeBtn');
    mask.addEventListener('click', function (e) {
        src5.removeChild(projectInfo);
        src5.removeChild(mask);
        e.stopPropagation();
    });
    closeBtn.addEventListener('click', function (e) {
        src5.removeChild(projectInfo);
        src5.removeChild(mask);
        e.stopPropagation();
    });
}
function wxBrowser() {
    let email = document.querySelector('#email');
    let flag = window.navigator.userAgent.indexOf('MicroMessenger');
    if (flag == -1) {
        email.href = 'mailto:yandiw@aliyun.com?subject=欢迎加入我们!From your perfect mobile resume';
    }
}