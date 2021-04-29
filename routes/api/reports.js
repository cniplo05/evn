const { Router } = require('express')
const Reports = require('../../models/Reports.js')
const router = Router()

router.get('/', async (req, res) => {
    try{
        const reports = await Reports.getAllReport(function(err, report) {
            // console.log('controller')
            if (err)
                if (!report) throw new Error('No reports')
                // const sorted = report.sort((a, b) => {
                //     return new Date(a.date) - new Date(b.date)
                // })
                res.status(200).json(report);
        });
        // const reports = [{ id : 10001, date: '2016-07-02', message: 'We detected', harm : 2}];

        // res.status(200).json([
        //     {
        //         id : 100001,
        //         date: '2016-07-02',
        //         message: 'We detected 0 possible harm',
        //         harm : 0
        //     },
        //     {
        //         id : 100002,
        //         date: '2016-05-04',
        //         message: 'We detected 2 possible harm',
        //         harm : 2
        //     },
        //     {
        //         id : 100003,
        //         date: '2016-05-03',
        //         message: 'We detected 0 possible harm.',
        //         harm : 0
        //     },
        //     {
        //         id : 100004,
        //         date: '2016-05-02',
        //         message: 'We detected 8 possible harm.',
        //         harm : 8
        //     },
        //     {
        //         id : 100005,
        //         date: '2016-05-01',
        //         message: 'We detected 1 possible harm.',
        //         harm : 1
        //     },
        // ])
    } catch(error){
        res.status(500).json({ message: error.message })
    }

    // const reports = {asd : asd}
    // return 'asdasd'
})

module.exports = router