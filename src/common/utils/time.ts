export function timeToSeconds(time: string) {
    const [hour = '0', minute = '0', second = '0'] = time.split(':')
    const hourInSecond = Number(hour) * 3600
    const minuteInSecond = Number(minute) * 60

    return hourInSecond + minuteInSecond + Number(second)
}