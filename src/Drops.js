class Drops
{
    constructor(rain)
    {
        this.rain = rain;
        this.drops = [];
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

        this.generateDrop();
    }

    generateDrop(column=null)
    {
        var dropLength = Math.floor(Math.random()*(this.rain.settings.maximumDropLength - this.rain.settings.minimumDropLength + 1) + this.rain.settings.minimumDropLength),
            column = Math.floor(Math.random() * this.rain.settings.columns);

        if (this.dropExists(0, column)) {
            return;
        }
        this.drops.push({
            'length': dropLength,
            'row': 0,
            'column': column,
        });
    }

    dropExists(row, column)
    {
        for (let drop of this.drops) {
            if (drop.column === column) {
                if (drop.row === row) {
                    return true;
                }

                return this.trailExists(row, column);
            }
        }
        return false;
    }

    trailExists(row, column)
    {
        for (let drop of this.drops) {
            if (drop.column === column) {
                for (var lookBehind = 1; lookBehind <= drop.length; lookBehind++) {
                    if (drop.row - lookBehind === row) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    dropExistsInColumn(column)
    {
        for (let drop of this.drops) {
            if (drop.column === column) {
                return true;
            }
        }
        return false;
    }
}