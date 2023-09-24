function cone(r, h) {

    let volume = 1 / 3 * Math.PI * (r * r) * h;
    let B = Math.PI * r * r;
    let l = Math.sqrt(r * r + h * h)
    let S = Math.PI * r * l;
    let totalSurface = B + S;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurface.toFixed(4)}`);
}
cone(3,5)
cone(3.3,7.8)
