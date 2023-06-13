let now = new Date()
let dayWeek = now.getDay()


switch(dayWeek){
    case 0:
        console.log('Sunday')
        console.log('Good beach')
        break
    case 1:
        console.log('Monday')
        console.log('Good Job')
    break
    
    case 2:
        console.log('Tuesday')
        console.log('Good Job')
        break
    case 3:
        console.log('Thursday')
        console.log('Good Job')
        break
    case 4:
        console.log('Wenesday')
        console.log('Good Job')
        break
    case 5:
        console.log('Friday')
        console.log('Good Job')
        break
    case 6:
        console.log('Sartuday')
        console.log('Good beach')
        break
    default:
        console.log('[ERROR] Invalid day!')


}