process.on('beforeExit', () => {
    console.log('Process just about to end...')
})

process.on('exit', () => {
    console.log('Process has ended')
})

process.on('uncaughtException', (error, origin)=>{
    console.error('Not caught error')
    console.error(error)
})

// process.on('unhandledRejection')