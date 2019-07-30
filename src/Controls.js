class Controls 
{
    constructor(rain)
    {
        this.rain = rain;
        this.listen();
    }

    listen() 
    {
        var _this = this;
        window.addEventListener('keydown', function(key) {
            _this.keyDown(key);
        });

        window.addEventListener('wheel', function(scroll) {
            _this.wheel(scroll);
        });
    }

    keyDown(key) 
    {
        switch (key.keyCode) {
            case 32:
                this.rain.pause();
        }
    }

    wheel(scroll)
    {
        if (scroll.deltaY > 0) {
            this.rain.settings.columns += 5
        } else {
            this.rain.settings.columns -= 5;
        }

        this.rain.resize();
    }
}