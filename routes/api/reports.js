const { Router } = require('express')
// const Reports = require('../../models/reports')
const router = Router()

router.get('/', async (req, res) => {
    // try{
    //     const reports = await Reports.find();
    //     if (!reports) throw new Error('No reports')
    //     const sorted = reports.sort((a, b) => {
    //         return new Date(a.date).getTime() - new Date(b.date).getTime()
    //     })
    //     res.status(200).json(sorted)
    // } catch(error){
    //     res.status(500).json({ message: error.message })
    // }

    const reports = {asd : asd}
})

module.exports = router