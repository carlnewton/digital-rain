class Grid
{
    constructor(rain)
    {
        this.rain = rain;
        this.grid = [];
    }

    addGlyph(row, column)
    {
        var glyph = this.rain.glyphs.get();
        if (!this.grid[row]) {
            this.grid[row] = [];
        }
        this.grid[row][column] = glyph;
    }

    drawGlyphs()
    {
        var columnWidth = this.rain.c.width / this.rain.settings.columns,
            columnHeight = columnWidth + (columnWidth / 100) * this.rain.settings.glyphHeightRatio,
            rowCount = 0;

        for (let row of this.grid) 
        {
            var glyphCount = 0;
            for (let glyph of row)
            {               
                glyph.left = columnWidth * glyphCount;
                glyph.top = columnHeight * rowCount;
                var _this = this;
                glyph.onload = function() {
                    _this.rain.ctx.drawImage(this, this.left, this.top, _this.rain.settings.glyphWidth, _this.rain.settings.glyphHeight);
                };
                glyphCount++;
            }
            rowCount++;
        }
    }
}