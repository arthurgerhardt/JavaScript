let result = 1

try {
    if (result === 0) {
        throw new Error('Result is zero')
    }
} catch (error) {
    console.log('Error:', error.message)
} finally {
    console.log('Fim')
    console.log('This will always run')
}