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
    }

    keyDown(key) 
    {
        switch (key.keyCode) {
            case 32:
                this.rain.pause();
        }
    }
}