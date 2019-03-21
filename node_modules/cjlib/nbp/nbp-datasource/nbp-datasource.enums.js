export var SortingDirection;
(function (SortingDirection) {
    SortingDirection[SortingDirection["ASCENDING"] = 1] = "ASCENDING";
    SortingDirection[SortingDirection["DESCENDING"] = -1] = "DESCENDING";
})(SortingDirection || (SortingDirection = {}));
export var CompareStatus;
(function (CompareStatus) {
    CompareStatus[CompareStatus["HIGHER"] = 1] = "HIGHER";
    CompareStatus[CompareStatus["EQUAL"] = 0] = "EQUAL";
    CompareStatus[CompareStatus["LOWER"] = -1] = "LOWER";
})(CompareStatus || (CompareStatus = {}));
