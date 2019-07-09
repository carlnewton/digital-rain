class Grid
{
    constructor(rain)
    {
        this.rain = rain;
        this.frame = 0;
        this.grid = [];
    }

    addGlyph(row, column)
    {
        var glyph = this.rain.glyphs.getName();

        if (Math.random() < this.rain.settings.changingGlyphPercent / 100) {
            glyph = 'changing';
        } else if (Math.random() < this.rain.settings.hiddenGlyphPercent / 100) {
            glyph = 'hidden';
        }

        if (!this.grid[row]) {
            this.grid[row] = [];
        }

        this.grid[row][column] = glyph;
    }

    drawGlyphs()
    {
        this.frame++;
        var columnWidth = this.rain.c.width / this.rain.settings.columns,
            columnHeight = columnWidth + (columnWidth / 100) * this.rain.settings.glyphHeightRatio,
            rowCount = 0;

        for (let row of this.grid) 
        {
            var glyphCount = 0;
            for (let glyphName of row)
            {
                var colour = this.rain.settings.glyphColour,
                    highlighted = false;
                if (this.rain.drops.dropIsHighlighted(rowCount, glyphCount)) {
                    highlighted = true;
                    var colour = this.rain.settings.highlightedGlyphColour;
                }

                if (glyphName === 'changing' || glyphName === 'hidden') {
                    var glyph = this.rain.glyphs.get(null, colour);
                } else {
                    var glyph = this.rain.glyphs.get(glyphName, colour);
                }

                glyph.left = columnWidth * glyphCount;
                glyph.top = columnHeight * rowCount;

                if (
                    this.rain.drops.dropExists(rowCount, glyphCount) 
                    && (glyphName !== 'changing' || this.frame % this.rain.settings.changingGlyphChangeRate === 0)
                ) {
                    this.rain.ctx.fillStyle = this.rain.settings.backgroundColour;
                    this.rain.ctx.fillRect(glyph.left, glyph.top, this.rain.settings.glyphWidth, this.rain.settings.glyphHeight);
                    if (glyphName !== 'hidden' || highlighted === true) {
                        this.rain.ctx.drawImage(glyph, glyph.left, glyph.top, this.rain.settings.glyphWidth, this.rain.settings.glyphHeight);
                    }
                } else if (!this.rain.drops.dropExists(rowCount, glyphCount) && this.rain.drops.dropExists(rowCount + 1, glyphCount)) {
                    this.rain.ctx.fillStyle = this.rain.settings.backgroundColour;
                    this.rain.ctx.fillRect(glyph.left, glyph.top - 1, this.rain.settings.glyphWidth, this.rain.settings.glyphHeight + 1);
                }
                glyphCount++;
            }
            rowCount++;
        }
    }
}