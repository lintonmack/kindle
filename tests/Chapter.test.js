var fs = require('fs')
var path = require('path')

describe('Chapter', function (){
    var chapter

    var Chapter = require('../src/Chapter')
    
    beforeEach(function(){
        chapter = new Chapter(path.join(__dirname, 'fixtures/sampleChapter.txt'))
    })

    test('outputs content from chapter file', function(){
        var content = fs.readFileSync(path.join(__dirname,'/fixtures/sampleChapter.txt'), 'utf8')

        expect(chapter.read()).toBe(content)
    })
})

