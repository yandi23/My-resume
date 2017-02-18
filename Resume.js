class Resume {
    constructor(name) {
        this.creater = name;
        this.createAt = new Date();
    }

}
let resume = new Resume('Wang Yandi');
Resume.profiles = {
    author: '王彦迪',
    age: 28,
    sex: '男',
};
Resume.express = [
    this.firstExpress = {
        date: '',
        job: '',
        content: ''
    },
    this.secondExpress = {
        date: '',
        job: '',
        content: ''
    }
];
Resume.skills = {
    know() {
        console.log();
    },
    can() {
        console.info({
            a: 'bb',
            c: 'bb'
        });
    },
    beGoodAt() {
        console.dir({});
    }
};
Resume.connect = {
    tel: '18562578837',
    weChat: 'Yandi_O',
    eMail: 'yandiw@aliyun.com'
};
