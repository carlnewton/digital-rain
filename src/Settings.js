class Settings
{
    constructor(rain)
    {
        this.rain = rain;
        this.glyphColour = 'rgb(51,204,76,1)';
        this.highlightedGlyphColour = 'rgb(255,255,255,1)';
        this.backgroundColour = 'rgb(0,0,0,1)';
        this.columns = 75;
        this.glyphHeightRatio = 50;
        this.changingGlyphPercent = 15;
        this.changingGlyphChangeRate = 4;
        this.hiddenGlyphPercent = 10;
        this.frameRate = 50;
        this.maximumDropLength = this.columns;
        this.minimumDropLength = 2;
        this.dropAttemptsPerTick = 2;
        this.highlightedDropPercent = 25;
        
        this.calculateGlyphSize();
    }

    calculateGlyphSize()
    {
        this.glyphWidth = this.rain.c.width / this.columns;
        this.glyphHeight = this.glyphWidth + (this.glyphWidth / 100) * this.glyphHeightRatio;
    }
}