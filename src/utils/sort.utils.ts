/**
 * Util che permette di ordinare un array di dati
 * 
* TODO: il componente npb-table ha una sua funzione di sorting (navigateToPage che
* gestisce paginazione e ordinamento insieme). In caso servisse gestire la paginazione
* forse convine passare a una cosa simile
 */
export class Sorter {

    private currentSorting: {
        sortBy: string,
        isASC: boolean
    } = {
            sortBy: null,
            isASC: false
        };

    /**
     * Metodo per ordinare dei dati mostrati a front-end per le properties indicate. Se
     * sono le stesse properties già impostate, viene invertito l'ordine (ASC <-> DESC).
     * @param data: array di oggetti da ordinare
     * @param nestedProperties: dato un elemento {id: 1, utente: {nome: "Mario"}}: con
     * nestedProperties = "id" ordina per la prop id, con nestedProperties = "utente.nome"
     * ordina per la prop nestata nome
     */
    // public sortBy(data: object[], nestedProperties: string): void {

    //     // Validazione
    //     if (!data || data.length === 0 || !nestedProperties) {

    //         return;
    //     }

    //     // Setto il nuovo sorting
    //     if (this.currentSorting.sortBy === nestedProperties) {

    //         this.currentSorting.isASC = !this.currentSorting.isASC;
    //     }
    //     else {

    //         this.currentSorting.sortBy = nestedProperties;
    //         this.currentSorting.isASC = true;
    //     }

    //     // Ordino i dati
    //     this.sortHelper(data);
    // }


    public sortBy(data: object[], field: string): void {

        // Validazione
        if (!data || !field)
            return;

        // Setto il nuovo sorting
        if (this.currentSorting.sortBy === field)
            this.currentSorting.isASC = !this.currentSorting.isASC;
        else {

            this.currentSorting.sortBy = field;
            this.currentSorting.isASC = true;
        }
        // Ordino i dati
        this.sortHelper(data);
    }


    /**
     * Come "sortBy" ma non cambia le impostazioni correnti dell'ordinamento
     */
    public sortByCurrentProperties(data: object[]) {

        // Validazione
        if (!data || data.length === 0) {

            return;
        }

        // Ordino i dati
        this.sortHelper(data);
    }

    /**
     * Ritorna true se l'ordinamento corrente è quello descritto dai due parametri
     */
    public isCurrentSorting(isThisLabel: string, isASC: boolean): boolean {

        return this.currentSorting.sortBy === isThisLabel && this.currentSorting.isASC === isASC;
    }

    /**
     * Helper per ordinare l'array di dati con le impostazioni correnti
     */
    private sortHelper(data: object[]) {

        if (!this.currentSorting.sortBy)
            return

        var nestedPropertiesArray: string[] = this.currentSorting.sortBy.split(".");
        var sortDirection: number = this.currentSorting.isASC ? 1 : -1;
        data.sort((a, b) => {

            var aValue: any = this.getNestedValue(a, nestedPropertiesArray).value;
            var bValue: any = this.getNestedValue(b, nestedPropertiesArray).value;

            if (aValue < bValue) {

                return -1 * sortDirection;
            }
            else if (aValue > bValue) {

                return 1 * sortDirection;
            }
            else {

                return 0;
            }
        });
    }

    /**
     * Util per estrarre un valore nestato da un oggetto
     * @param obj: l'oggetto da cui estrarre i dati
     * @param nestedPropertiesArray: array di properties nestate
     */
    private getNestedValue(obj: object, nestedPropertiesArray: string[]): any {

        var value: any = obj[nestedPropertiesArray[0]];
        for (var i: number = 1; i < nestedPropertiesArray.length; i++) {

            value = value[nestedPropertiesArray[i]];
        }

        return value;
    }
}