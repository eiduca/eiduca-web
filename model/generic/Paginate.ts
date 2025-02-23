export class Page<T> {
    content: T[];
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

    constructor(data: any) {
        this.content = data.content || [];
        this.pageable = data.pageable;
        this.last = data.last;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
        this.size = data.size;
        this.number = data.number;
        this.sort = data.sort;
        this.first = data.first;
        this.numberOfElements = data.numberOfElements;
        this.empty = data.empty;
    }
}

interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}