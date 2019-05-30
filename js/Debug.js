class _Debugger {
    constructor(attr) {
        this.ctx = attr.ctx;
        this.x1 = attr.x1;
        this.x2 = attr.x2;
        this.y1 = attr.y1;
        this.y2 = attr.y2;
        this.color = attr.color;
        this.lineWidth = attr.lineWidth;
    };
    DrawLine = function (ctx) {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1 - 16);  //From
        ctx.lineTo(this.x2, this.y2 - 16);    //To
        ctx.stroke();

    };


}