class Grid
{
    constructor(rain)
    {
        this.rain = rain;
        this.grid = [];
    }

    addGlyph(row, column)
    {
        var glyph = this.rain.glyphs.getName();

        if (Math.random() < this.rain.settings.changingGlyphPercent / 100) {
            glyph = 'changing';
        }

        if (!this.grid[row]) {
            this.grid[row] = [];
        }

        this.grid[row][column] = glyph;
    }

    drawGlyphs(firstFrame=false)
    {
        var columnWidth = this.rain.c.width / this.rain.settings.columns,
            columnHeight = columnWidth + (columnWidth / 100) * this.rain.settings.glyphHeightRatio,
            rowCount = 0;

        for (let row of this.grid) 
        {
            var glyphCount = 0;
            for (let glyphName of row)
            {
                if (glyphName === 'changing') {
                    var glyph = this.rain.glyphs.get();
                } else {
                    var glyph = this.rain.glyphs.get(glyphName);
                }

                glyph.left = columnWidth * glyphCount;
                glyph.top = columnHeight * rowCount;

                if (this.rain.drops.dropExists(rowCount, glyphCount)) {
                    var _this = this;
                    glyph.onload = function() {
                        _this.rain.ctx.fillStyle = _this.rain.settings.backgroundColour;
                        _this.rain.ctx.fillRect(this.left, this.top, _this.rain.settings.glyphWidth, _this.rain.settings.glyphHeight);
                        _this.rain.ctx.drawImage(this, this.left, this.top, _this.rain.settings.glyphWidth, _this.rain.settings.glyphHeight);
                    };
                } else {
                    this.rain.ctx.fillStyle = this.rain.settings.backgroundColour;
                    this.rain.ctx.fillRect(glyph.left, glyph.top, this.rain.settings.glyphWidth, this.rain.settings.glyphHeight);
                }
                glyphCount++;
            }
            rowCount++;
        }
    }
}