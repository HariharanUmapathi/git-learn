import { getAge, getProjects, getFollowers } from "./Utilities.js";
var bookImages = [
    { "id": 0, "author": "Alejandro Escamilla", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/yC-Yzbqy7PY", "download_url": "https://picsum.photos/id/0/5616/3744" },
    { "id": 1, "author": "Alejandro Escamilla", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/LNRyGwIJr5c", "download_url": "https://picsum.photos/id/1/5616/3744" },
    { "id": 2, "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/6J--NXulQCs", "download_url": "https://picsum.photos/id/10/2500/1667" },
    { "id": 3, "author": "Tina Rataj", "width": 2500, "height": 1656, "url": "https://unsplash.com/photos/pwaaqfoMibI", "download_url": "https://picsum.photos/id/100/2500/1656" },
    { "id": 4, "author": "Lukas Budimaier", "width": 5626, "height": 3635, "url": "https://unsplash.com/photos/6cY-FvMlmkQ", "download_url": "https://picsum.photos/id/1000/5626/3635" },
    { "id": 5, "author": "Danielle MacInnes", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/1DkWWN1dr-s", "download_url": "https://picsum.photos/id/1001/5616/3744" },
    { "id": 6, "author": "NASA", "width": 4312, "height": 2868, "url": "https://unsplash.com/photos/6-jTZysYY_U", "download_url": "https://picsum.photos/id/1002/4312/2868" },
    { "id": 7, "author": "E+N Photographies", "width": 1181, "height": 1772, "url": "https://unsplash.com/photos/GYumuBnTqKc", "download_url": "https://picsum.photos/id/1003/1181/1772" },
    { "id": 8, "author": "Greg Rakozy", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/SSxIGsySh8o", "download_url": "https://picsum.photos/id/1004/5616/3744" },
    { "id": 9, "author": "Matthew Wiebe", "width": 5760, "height": 3840, "url": "https://unsplash.com/photos/tBtuxtLvAZs", "download_url": "https://picsum.photos/id/1005/5760/3840" },
    { "id": 10, "author": "Vladimir Kudinov", "width": 3000, "height": 2000, "url": "https://unsplash.com/photos/-wWRHIUklxM", "download_url": "https://picsum.photos/id/1006/3000/2000" },
    { "id": 11, "author": "Benjamin Combs", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/5L4XAgMSno0", "download_url": "https://picsum.photos/id/1008/5616/3744" },
    { "id": 12, "author": "Christopher Campbell", "width": 5000, "height": 7502, "url": "https://unsplash.com/photos/CMWRIzyMKZk", "download_url": "https://picsum.photos/id/1009/5000/7502" },
    { "id": 13, "author": "Christian Bardenhorst", "width": 2621, "height": 1747, "url": "https://unsplash.com/photos/8lMhzUjD1Wk", "download_url": "https://picsum.photos/id/101/2621/1747" },
    { "id": 14, "author": "Samantha Sophia", "width": 5184, "height": 3456, "url": "https://unsplash.com/photos/NaWKMlp3tVs", "download_url": "https://picsum.photos/id/1010/5184/3456" },
    { "id": 15, "author": "Roberto Nickson", "width": 5472, "height": 3648, "url": "https://unsplash.com/photos/7BjmDICVloE", "download_url": "https://picsum.photos/id/1011/5472/3648" },
    { "id": 16, "author": "Scott Webb", "width": 3973, "height": 2639, "url": "https://unsplash.com/photos/uAgLGG1WBd4", "download_url": "https://picsum.photos/id/1012/3973/2639" },
    { "id": 17, "author": "Cayton Heath", "width": 4256, "height": 2832, "url": "https://unsplash.com/photos/D8LcRLwZyPs", "download_url": "https://picsum.photos/id/1013/4256/2832" },
    { "id": 18, "author": "Oscar Keys", "width": 6016, "height": 4000, "url": "https://unsplash.com/photos/AmPRUnRb6N0", "download_url": "https://picsum.photos/id/1014/6016/4000" },
    { "id": 19, "author": "Alexey Topolyanskiy", "width": 6000, "height": 4000, "url": "https://unsplash.com/photos/-oWyJoSqBRM", "download_url": "https://picsum.photos/id/1015/6000/4000" },
    { "id": 20, "author": "Philippe Wuyts", "width": 3844, "height": 2563, "url": "https://unsplash.com/photos/_h7aBovKia4", "download_url": "https://picsum.photos/id/1016/3844/2563" },
    { "id": 21, "author": "Andrew Ridley", "width": 3914, "height": 2935, "url": "https://unsplash.com/photos/Kt5hRENuotI", "download_url": "https://picsum.photos/id/1018/3914/2935" },
    { "id": 22, "author": "Patrick Fore", "width": 5472, "height": 3648, "url": "https://unsplash.com/photos/V6s1cmE39XM", "download_url": "https://picsum.photos/id/1019/5472/3648" },
    { "id": 23, "author": "Ben Moore", "width": 4320, "height": 3240, "url": "https://unsplash.com/photos/pJILiyPdrXI", "download_url": "https://picsum.photos/id/102/4320/3240" },
    { "id": 24, "author": "Adam Willoughby-Knox", "width": 4288, "height": 2848, "url": "https://unsplash.com/photos/_snqARKTgoc", "download_url": "https://picsum.photos/id/1020/4288/2848" }, { "id": 25, "author": "Frances Gunn", "width": 2048, "height": 1206, "url": "https://unsplash.com/photos/8BmNurlVR6M", "download_url": "https://picsum.photos/id/1021/2048/1206" },
    { "id": 26, "author": "Vashishtha Jogi", "width": 6000, "height": 3376, "url": "https://unsplash.com/photos/bClr95glx6k", "download_url": "https://picsum.photos/id/1022/6000/3376" },
    { "id": 27, "author": "William Hook", "width": 3955, "height": 2094, "url": "https://unsplash.com/photos/93Ep1dhTd2s", "download_url": "https://picsum.photos/id/1023/3955/2094" },
    { "id": 28, "author": "Мартин Тасев", "width": 1920, "height": 1280, "url": "https://unsplash.com/photos/7ALI0RYyq6s", "download_url": "https://picsum.photos/id/1024/1920/1280" },
    { "id": 29, "author": "Matthew Wiebe", "width": 4951, "height": 3301, "url": "https://unsplash.com/photos/U5rMrSI7Pn4", "download_url": "https://picsum.photos/id/1025/4951/3301" },
    { "id": 30, "author": "Dmitrii Vaccinium", "width": 4621, "height": 3070, "url": "https://unsplash.com/photos/Q47eNv_UvfM", "download_url": "https://picsum.photos/id/1026/4621/3070" },
    { "id": 31, "author": "Roksolana Zasiadko", "width": 2848, "height": 4272, "url": "https://unsplash.com/photos/LyeduBb2Auk", "download_url": "https://picsum.photos/id/1027/2848/4272" },
    { "id": 32, "author": "Dikaseva", "width": 5184, "height": 3456, "url": "https://unsplash.com/photos/zvf7cZ0PC20", "download_url": "https://picsum.photos/id/1028/5184/3456" },
    { "id": 33, "author": "freddie marriage", "width": 4887, "height": 2759, "url": "https://unsplash.com/photos/utwYoEu9SU8", "download_url": "https://picsum.photos/id/1029/4887/2759" },
    { "id": 34, "author": "Ilham Rahmansyah", "width": 2592, "height": 1936, "url": "https://unsplash.com/photos/DwTZwZYi9Ww", "download_url": "https://picsum.photos/id/103/2592/1936" },
    { "id": 35, "author": "Mike Wilson", "width": 5446, "height": 3063, "url": "https://unsplash.com/photos/rM7B4DheQc0", "download_url": "https://picsum.photos/id/1031/5446/3063" },
    { "id": 36, "author": "NASA", "width": 2880, "height": 1800, "url": "https://unsplash.com/photos/E7q00J_8N7A", "download_url": "https://picsum.photos/id/1032/2880/1800" },
    { "id": 37, "author": "Erez Attias", "width": 2048, "height": 1365, "url": "https://unsplash.com/photos/KqVHRmHVwwM", "download_url": "https://picsum.photos/id/1033/2048/1365" },
    { "id": 38, "author": "Jared Erondu", "width": 5854, "height": 3903, "url": "https://unsplash.com/photos/j4PaE7E2_Ws", "download_url": "https://picsum.photos/id/1035/5854/3903" },
    { "id": 39, "author": "Wolfgang Lutz", "width": 4608, "height": 3072, "url": "https://unsplash.com/photos/yOujaSETXlo", "download_url": "https://picsum.photos/id/1036/4608/3072" },
    { "id": 40, "author": "Jordan McQueen", "width": 5760, "height": 3840, "url": "https://unsplash.com/photos/93g2k8D1Mi8", "download_url": "https://picsum.photos/id/1037/5760/3840" },
    { "id": 41, "author": "Marcelo Quinan", "width": 3914, "height": 5863, "url": "https://unsplash.com/photos/upywS5QFwr8", "download_url": "https://picsum.photos/id/1038/3914/5863" },
    { "id": 42, "author": "Andrew Coelho", "width": 6945, "height": 4635, "url": "https://unsplash.com/photos/VB-w_3dnyvI", "download_url": "https://picsum.photos/id/1039/6945/4635" },
    { "id": 43, "author": "Dyaa Eldin", "width": 3840, "height": 2160, "url": "https://unsplash.com/photos/2fl-ocJ5MOA", "download_url": "https://picsum.photos/id/104/3840/2160" },
    { "id": 44, "author": "Rachel Davis", "width": 4496, "height": 3000, "url": "https://unsplash.com/photos/tn2rBnvIl9I", "download_url": "https://picsum.photos/id/1040/4496/3000" },
    { "id": 45, "author": "Tim Marshall", "width": 5184, "height": 2916, "url": "https://unsplash.com/photos/yEOCA6oiVqg", "download_url": "https://picsum.photos/id/1041/5184/2916" },
    { "id": 46, "author": "Jeremy Thomas", "width": 3456, "height": 5184, "url": "https://unsplash.com/photos/rMmibFe4czY", "download_url": "https://picsum.photos/id/1042/3456/5184" },
    { "id": 47, "author": "Christian Joudrey", "width": 5184, "height": 3456, "url": "https://unsplash.com/photos/mWRR1xj95hg", "download_url": "https://picsum.photos/id/1043/5184/3456" },
    { "id": 48, "author": "Steve Carter", "width": 4032, "height": 2268, "url": "https://unsplash.com/photos/Ixp4YhCKZkI", "download_url": "https://picsum.photos/id/1044/4032/2268" },
    { "id": 49, "author": "Aleksandra Boguslawska", "width": 3936, "height": 2624, "url": "https://unsplash.com/photos/USOu_Ob9rxo", "download_url": "https://picsum.photos/id/1045/3936/2624" }];

function randomImage() {
    var rand=Math.floor(Math.random() * 50);
    var img=bookImages.filter((e)=>{
        if(e.id===rand)
        return e;
        else 
        return [];
    })
    return img[0].download_url;
}



var students = [
    { profile: "./react-learn/profiles/avatar5.png", id: 1, name: "Hariharan", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
    { profile: "./react-learn/profiles/avatar1.png", id: 2, name: "Arjun", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
    { profile: "./react-learn/profiles/avatar3.png", id: 3, name: "Ram", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
    { profile: "./react-learn/profiles/avatar2.png", id: 4, name: "Rajini", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
    { profile: "./react-learn/profiles/avatar5.png", id: 5, name: "Danush", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
    { profile: "./react-learn/profiles/avatar2.png", id: 6, name: "John Doe", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
    { profile: "./react-learn/profiles/avatar1.png", id: 7, name: "Dhruv", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
    { profile: "./react-learn/profiles/avatar2.png", id: 8, name: "Vikram", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
    { profile: "./react-learn/profiles/avatar3.png", id: 9, name: "Ajith", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
    { profile: "./react-learn/profiles/avatar3.png", id: 10, name: "Stuart", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() }];
var books = [
    { id: 1, title: "Thomb Raider", price: "200 INR", logo: randomImage() },
    { id: 2, title: "Thomb Raider", price: "220 INR", logo: randomImage() },
    { id: 3, title: "Harry Potter and Deadly Hallows", price: "200 INR", logo: randomImage() },
    { id: 4, title: "War and Peace", price: "200 INR", logo: randomImage() },
    { id: 5, title: "Police Story", price: "200 INR", logo: randomImage() },
    { id: 6, title: "Fast and Furious", price: "200 INR", logo: randomImage() },
    { id: 7, title: "How to hack nasa with html", price: "200 INR", logo: randomImage() },
    { id: 8, title: "How to build a web site", price: "200 INR", logo: randomImage() }

];
var authors = [
    { id: 1, name: "J. K .Rowling", profile: "", age: "", image: randomImage() },
    { id: 2, name: "Mahathma Gandhi", profile: "", age: "", image: randomImage() },
    { id: 3, name: "A.P.J Abdul Kalam", profile: "", age: "", image: randomImage() },
    { id: 4, name: "Kiran Bedi", profile: "", age: "", image: randomImage() },
    { id: 5, name: "Rajesh Kumar", profile: "", age: "", image: randomImage() },
    { id: 6, name: "Jayakanthan", profile: "", age: "", image: randomImage() },
    { id: 7, name: "Bharathidasan", profile: "", age: "", image: randomImage() },
    { id: 8, name: "Bharathiyar", profile: "", age: "", image: randomImage() },
    { id: 9, name: "Thiruvalluvar", profile: "", age: "", image: randomImage() },
    { id: 10, name: "R.S.Aggarwaal", profile: "", age: "", image: randomImage() },
    { id: 11, name: "Walt witman", profile: "", age: "", image: randomImage() },
    { id: 12, name: "Jothika", profile: "", age: "", image: randomImage() },
    { id: 13, name: "Vidharth", profile: "", age: "", image: randomImage() },
    { id: 14, name: "Ramajeyam", profile: "", age: "", image: randomImage() },
    { id: 15, name: "Ramesh", profile: "", age: "", image: randomImage() },
    { id: 16, name: "Vijayakumar", profile: "", age: "", image: randomImage() }


];

var contributors = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "url": "https://via.placeholder.com/600/1ee8a4",
        "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "url": "https://via.placeholder.com/600/66b7d2",
        "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    },
    {
        "albumId": 1,
        "id": 13,
        "title": "repudiandae iusto deleniti rerum",
        "url": "https://via.placeholder.com/600/197d29",
        "thumbnailUrl": "https://via.placeholder.com/150/197d29"
    },
    {
        "albumId": 1,
        "id": 14,
        "title": "est necessitatibus architecto ut laborum",
        "url": "https://via.placeholder.com/600/61a65",
        "thumbnailUrl": "https://via.placeholder.com/150/61a65"
    },
    {
        "albumId": 1,
        "id": 15,
        "title": "harum dicta similique quis dolore earum ex qui",
        "url": "https://via.placeholder.com/600/f9cee5",
        "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
    },
    {
        "albumId": 1,
        "id": 16,
        "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        "url": "https://via.placeholder.com/600/fdf73e",
        "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
    },
    {
        "albumId": 1,
        "id": 17,
        "title": "natus doloribus necessitatibus ipsa",
        "url": "https://via.placeholder.com/600/9c184f",
        "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
    },
    {
        "albumId": 1,
        "id": 18,
        "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
        "url": "https://via.placeholder.com/600/1fe46f",
        "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
    },
    {
        "albumId": 1,
        "id": 19,
        "title": "perferendis nesciunt eveniet et optio a",
        "url": "https://via.placeholder.com/600/56acb2",
        "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
    },
    {
        "albumId": 1,
        "id": 20,
        "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
        "url": "https://via.placeholder.com/600/8985dc",
        "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
    },
    {
        "albumId": 1,
        "id": 21,
        "title": "ad et natus qui",
        "url": "https://via.placeholder.com/600/5e12c6",
        "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
    },
    {
        "albumId": 1,
        "id": 22,
        "title": "et ea illo et sit voluptas animi blanditiis porro",
        "url": "https://via.placeholder.com/600/45601a",
        "thumbnailUrl": "https://via.placeholder.com/150/45601a"
    },
    {
        "albumId": 1,
        "id": 23,
        "title": "harum velit vero totam",
        "url": "https://via.placeholder.com/600/e924e6",
        "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
    },
    {
        "albumId": 1,
        "id": 24,
        "title": "beatae officiis ut aut",
        "url": "https://via.placeholder.com/600/8f209a",
        "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
    },
    {
        "albumId": 1,
        "id": 25,
        "title": "facere non quis fuga fugit vitae",
        "url": "https://via.placeholder.com/600/5e3a73",
        "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
    },
    {
        "albumId": 1,
        "id": 26,
        "title": "asperiores nobis voluptate qui",
        "url": "https://via.placeholder.com/600/474645",
        "thumbnailUrl": "https://via.placeholder.com/150/474645"
    },
    {
        "albumId": 1,
        "id": 27,
        "title": "sit asperiores est quos quis nisi veniam error",
        "url": "https://via.placeholder.com/600/c984bf",
        "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
    },
    {
        "albumId": 1,
        "id": 28,
        "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
        "url": "https://via.placeholder.com/600/392537",
        "thumbnailUrl": "https://via.placeholder.com/150/392537"
    },
    {
        "albumId": 1,
        "id": 29,
        "title": "aut ipsam quos ab placeat omnis",
        "url": "https://via.placeholder.com/600/602b9e",
        "thumbnailUrl": "https://via.placeholder.com/150/602b9e"
    },
    {
        "albumId": 1,
        "id": 30,
        "title": "odio enim voluptatem quidem aut nihil illum",
        "url": "https://via.placeholder.com/600/372c93",
        "thumbnailUrl": "https://via.placeholder.com/150/372c93"
    },
    {
        "albumId": 1,
        "id": 31,
        "title": "voluptate voluptates sequi",
        "url": "https://via.placeholder.com/600/a7c272",
        "thumbnailUrl": "https://via.placeholder.com/150/a7c272"
    },
    {
        "albumId": 1,
        "id": 32,
        "title": "ad enim dignissimos voluptatem similique",
        "url": "https://via.placeholder.com/600/c70a4d",
        "thumbnailUrl": "https://via.placeholder.com/150/c70a4d"
    },
    {
        "albumId": 1,
        "id": 33,
        "title": "culpa ipsam nobis qui fuga magni et mollitia",
        "url": "https://via.placeholder.com/600/501fe1",
        "thumbnailUrl": "https://via.placeholder.com/150/501fe1"
    },
    {
        "albumId": 1,
        "id": 34,
        "title": "vitae est facere quia itaque adipisci perferendis id maiores",
        "url": "https://via.placeholder.com/600/35185e",
        "thumbnailUrl": "https://via.placeholder.com/150/35185e"
    },
    {
        "albumId": 1,
        "id": 35,
        "title": "tenetur minus voluptatum et",
        "url": "https://via.placeholder.com/600/c96cad",
        "thumbnailUrl": "https://via.placeholder.com/150/c96cad"
    },
    {
        "albumId": 1,
        "id": 36,
        "title": "expedita rerum eaque",
        "url": "https://via.placeholder.com/600/4d564d",
        "thumbnailUrl": "https://via.placeholder.com/150/4d564d"
    },
    {
        "albumId": 1,
        "id": 37,
        "title": "totam voluptas iusto deserunt dolores",
        "url": "https://via.placeholder.com/600/ea51da",
        "thumbnailUrl": "https://via.placeholder.com/150/ea51da"
    },
    {
        "albumId": 1,
        "id": 38,
        "title": "natus magnam iure rerum pariatur molestias dolore nisi",
        "url": "https://via.placeholder.com/600/4f5b8d",
        "thumbnailUrl": "https://via.placeholder.com/150/4f5b8d"
    },
    {
        "albumId": 1,
        "id": 39,
        "title": "molestiae nam ullam et rerum doloribus",
        "url": "https://via.placeholder.com/600/1e71a2",
        "thumbnailUrl": "https://via.placeholder.com/150/1e71a2"
    },
    {
        "albumId": 1,
        "id": 40,
        "title": "est quas voluptates dignissimos sint praesentium nisi recusandae",
        "url": "https://via.placeholder.com/600/3a0b95",
        "thumbnailUrl": "https://via.placeholder.com/150/3a0b95"
    },
    {
        "albumId": 1,
        "id": 41,
        "title": "in voluptatem doloremque cum atque architecto deleniti",
        "url": "https://via.placeholder.com/600/659403",
        "thumbnailUrl": "https://via.placeholder.com/150/659403"
    },
    {
        "albumId": 1,
        "id": 42,
        "title": "voluptatibus a autem molestias voluptas architecto culpa",
        "url": "https://via.placeholder.com/600/ca50ac",
        "thumbnailUrl": "https://via.placeholder.com/150/ca50ac"
    },
    {
        "albumId": 1,
        "id": 43,
        "title": "eius hic autem ad beatae voluptas",
        "url": "https://via.placeholder.com/600/6ad437",
        "thumbnailUrl": "https://via.placeholder.com/150/6ad437"
    },
    {
        "albumId": 1,
        "id": 44,
        "title": "neque eum provident et inventore sed ipsam dignissimos quo",
        "url": "https://via.placeholder.com/600/29fe9f",
        "thumbnailUrl": "https://via.placeholder.com/150/29fe9f"
    },
    {
        "albumId": 1,
        "id": 45,
        "title": "praesentium fugit quis aut voluptatum commodi dolore corrupti",
        "url": "https://via.placeholder.com/600/c4084a",
        "thumbnailUrl": "https://via.placeholder.com/150/c4084a"
    },
    {
        "albumId": 1,
        "id": 46,
        "title": "quidem maiores in quia fugit dolore explicabo occaecati",
        "url": "https://via.placeholder.com/600/e9b68",
        "thumbnailUrl": "https://via.placeholder.com/150/e9b68"
    },
    {
        "albumId": 1,
        "id": 47,
        "title": "et soluta est",
        "url": "https://via.placeholder.com/600/b4412f",
        "thumbnailUrl": "https://via.placeholder.com/150/b4412f"
    },
    {
        "albumId": 1,
        "id": 48,
        "title": "ut esse id",
        "url": "https://via.placeholder.com/600/68e0a8",
        "thumbnailUrl": "https://via.placeholder.com/150/68e0a8"
    },
    {
        "albumId": 1,
        "id": 49,
        "title": "quasi quae est modi quis quam in impedit",
        "url": "https://via.placeholder.com/600/2cd88b",
        "thumbnailUrl": "https://via.placeholder.com/150/2cd88b"
    },
    {
        "albumId": 1,
        "id": 50,
        "title": "et inventore quae ut tempore eius voluptatum",
        "url": "https://via.placeholder.com/600/9e59da",
        "thumbnailUrl": "https://via.placeholder.com/150/9e59da"
    }
];



var Database = {
    "students": students,
    "books": books,
    "authors": authors,
    "contributors": contributors
};

export default Database;