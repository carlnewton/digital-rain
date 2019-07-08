class Settings
{
    constructor(rain)
    {
        this.rain = rain;
        this.glyphColour = 'rgb(51,204,51,1)';
        this.backgroundColour = 'rgb(0,0,0,1)';
        this.columns = 75;
        this.glyphHeightRatio = 50;
        this.changingGlyphPercent = 5;
        this.frameRate = 100;
        
        this.calculateGlyphSize();
    }

    calculateGlyphSize()
    {
        this.glyphWidth = this.rain.c.width / this.columns;
        this.glyphHeight = this.glyphWidth + (this.glyphWidth / 100) * this.glyphHeightRatio;
    }
}