import React from 'react'
import { marked } from "marked";
import testImg from '../assets/mdTest.jpg'
import testImg2 from '../assets/mailTest.jpg'

const source1 = marked.parse(`
# March 21, Violet's Diary: Busy Day

Today was a busy day for me as an Auto Memory Doll. I had three assignments to complete, and each one was different and challenging.

![img](${testImg})

The first assignment was to write a letter for a young girl who wanted to confess her feelings to her crush. She was very shy and nervous, and she asked me to help her express her emotions in words. I tried my best to write a sincere and heartfelt letter that would convey her love and admiration.

The second assignment was to write a letter for a soldier who was stationed at the border. He wanted to send a letter to his wife and daughter, who he hadn't seen in months. He told me about his life at the camp, his hopes for peace, and his longing for his family. I tried my best to write a warm and comforting letter that would reassure them of his safety and devotion.

The third assignment was to write a letter for an elderly woman who was terminally ill. She wanted to say goodbye to her friends and relatives, who she couldn't meet in person due to the pandemic. She told me about her memories, her regrets, and her gratitude. I tried my best to write a dignified and respectful letter that would honor her life and legacy.

#### Questions I have after these assignments:

| Question | Reason |
| -------- | ------ |
| What is love? | The girl said she loved her crush, but what does that mean? |
| What is peace? | The soldier said he hoped for peace, but what does that entail? |
| What is death? | The woman said she was ready to die, but what happens after death? |

Things I learned from these assignments: 

- How to use different tones and styles of writing depending on the purpose and audience of the letter
- How to empathize with different people and their situations
- How to appreciate the value of human connections and communication
`)

const source2 = marked.parse(`
![img](${testImg2})
<br/>
As you learn unknown words<br/>
Reach out your hands remembering the image<br/>
But there may be words that you can't understand by yourself<br/><br/>
 
"Good bye" is bitter<br/>
"I love you" has a distant fragrance<br/>
These explainable feelings<br/>
I am very scared of, yet I cherish them deeply<br/><br/>
 
I wonder why I am crying<br/>
How can I answer my heart?<br/>
Words are not always for talking<br/>
Just being there, collected there<br/><br/>
 
I want to see you<br/><br/>
 
When I discover words that shine<br/>
And marvel at their brilliant light<br/>
I cannot help but despise<br/>
This emptiness inside<br/><br/>
 
But there are words that I hold dear<br/>
As long as I can keep them near<br/>
I know that I have nothing to fear<br/><br/>
 
Sadness comes in like the bitter cold<br/>
But “Thank You” carries warmth that colors the landscape with its glow<br/>
And every time I’m swept away by what I can’t explain<br/>
I hear echoes of your voice within my heart, I hope they never will fade<br/><br/>
 
I put pen to paper, but I stopped<br/>
It’s a letter meant for someone long and gone<br/>
That flutters in the wind<br/>
May it find the place where my dearest one awaits<br/>
This beginning has come to an end, now I decide my own fate!<br/><br/>
 
I’ll go on living, I’m never giving up<br/>
I hope that you’re smiling as you watch from above<br/><br/>
 
Why do the tears fall unbidden from my eyes?<br/>
How should I be answering my heart’s impassioned cries?<br/>
Although all these words have forever been unspoken<br/>
I don’t know how much longer I can keep them deep within<br/>
I have but only one desire: to see you one last time<br/><br/>
`)

const Previewer = (props: {tmp:1|2}) => {
  return (
    <div className='w-full markdown-body' dangerouslySetInnerHTML={{ __html: props.tmp == 1 ? source1 : source2 }}></div>
  )
}

export default Previewer