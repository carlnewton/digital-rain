class Drops
{
    constructor(rain)
    {
        this.rain = rain;
        this.drops = [];
        this.stopped = false;
    }

    tick()
    {
        var rows = Math.ceil(this.rain.c.height / this.rain.settings.glyphHeight);
        for (var drop = 0; drop <= this.drops.length - 1; drop++) {
            if (this.drops[drop].row - this.drops[drop].length < rows) {
                this.drops[drop].row += 1;
            } else {
                this.drops.splice(drop, 1);
            }
        }

        if (!this.stopped) {
            for (var dropAttempt = 1; dropAttempt <= this.rain.settings.dropAttemptsPerTick; dropAttempt++) {
                this.generateDrop();
            }
        }
    }

    generateDrop(column=null)
    {
        var dropLength = Math.floor(Math.random()*(this.rain.settings.maximumDropLength - this.rain.settings.minimumDropLength + 1) + this.rain.settings.minimumDropLength),
            column = Math.floor(Math.random() * this.rain.settings.columns);

        if (this.dropExists(0, column)) {
            return;
        }

        var highlighted = false;
        if (Math.random() < this.rain.settings.highlightedDropPercent / 100) {
            highlighted = true;
        }

        this.drops.push({
            'length': dropLength,
            'row': 0,
            'column': column,
            'highlighted': highlighted,
        });
    }

    dropIsHighlighted(row, column)
    {
        for (let drop of this.drops) {
            if (drop.highlighted === true && drop.column === column && drop.row === row) {
                return true;
            }
        }
        return false;
    }

    dropExists(row, column, trail=true)
    {
        for (let drop of this.drops) {
            if (drop.column === column) {
                if (drop.row === row) {
                    return true;
                }

                if (trail === true && row <= drop.row && row > drop.row - drop.length) {
                    return true;
                }
            }
        }
        return false;
    }
}