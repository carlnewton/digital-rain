class DigitalRain 
{
    constructor()
    {
        this.c = document.getElementById('canvas');
        this.ctx = this.c.getContext('2d');
        this.setDimensions();

        this.settings = new Settings(this);
        this.controls = new Controls(this);
        this.glyphs = new Glyphs(this);
        this.drops = new Drops(this);
        this.grid = new Grid(this);
        
        this.drawBackground();
        this.generateGlyphs();

        var _this = this;
        this.loop = setInterval(function() {_this.tick()}, _this.settings.frameRate);
    }

    pause()
    {
        this.drops.stopped = !this.drops.stopped;
    }

    generateGlyphs()
    {
        var rows = Math.ceil(this.c.height / this.settings.glyphHeight);
        for (var row = 0; row < rows; row++)
        {
            for (var column = 0; column < this.settings.columns; column++)
            {
                this.grid.addGlyph(row, column)
            }
        }
    }

    tick()
    {
        this.drops.tick();
        this.grid.drawGlyphs();
    }

    resize()
    {
        this.setDimensions();
        this.drawBackground();
        this.settings.calculateGlyphSize();
        this.glyphs = new Glyphs(this);
        this.glyphs.generateOffscreenCanvas();
        this.generateGlyphs();
    }

    drawBackground()
    {
        this.ctx.fillStyle = this.settings.backgroundColour;
        this.ctx.fillRect(0, 0, this.c.width, this.c.height);
    }

    setDimensions() 
    {
        this.c.height = this.c.clientHeight;
        this.c.width = this.c.clientWidth;
    }
}