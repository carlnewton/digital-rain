class DigitalRain 
{
    constructor()
    {
        this.c = document.getElementById('canvas');
        this.ctx = this.c.getContext('2d');
        this.setDimensions();

        this.settings = new Settings(this);
        this.glyphs = new Glyphs(this);
        this.grid = new Grid(this);
        
        this.ctx.fillStyle = this.settings.backgroundColour;
        this.ctx.fillRect(0, 0, this.c.width, this.c.height);

        this.generateGlyphs();

        var _this = this;
        this.grid.drawGlyphs(true);
        this.loop = setInterval(function() {_this.tick()}, _this.settings.frameRate);
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
        this.grid.drawGlyphs();
    }

    setDimensions() 
    {
        this.c.height = this.c.clientHeight;
        this.c.width = this.c.clientWidth;
    }
}