new TypeIt("#abcxyz", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("Tiến Quý 💞 Độc Thân")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("Hà Nội đẹp nhất về đêm, Đời anh đẹp nhất khi thêm em vào...!")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();