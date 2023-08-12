function actualizarHora(){
    const hora = new Date()
    const horas = hora.getHours()
    const minutos=hora.getMinutes()
    const segundos = hora.getSeconds()
    let mostrarHora=`${horas}:${minutos}:${segundos}`
    document.querySelector('.Hora').innerHTML=mostrarHora
    obtenerFecha(hora)
}
setInterval(actualizarHora,1000)

function obtenerFecha(hora){
    let mes =[
        "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
    ]
    let dia=[
        "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
    ]
    let obtenerFecha=`${dia[hora.getDay()]+ " " + hora.getDate() + " de " +mes[hora.getMonth()] + " " + hora.getFullYear()}`
    document.querySelector('.fecha').innerHTML =obtenerFecha
}