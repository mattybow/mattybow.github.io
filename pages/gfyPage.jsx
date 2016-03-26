import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';

const CONCEPT_TEXT = `
I was experimenting with
[polymer](https://www.polymer-project.org/)
when I made this first post.  Polymer seemed to be promising
technology for making reusable web comoponents without too much overhead.


While making the post, I put a few animated [\`x-gifs\`](https://github.com/geelen/x-gif)
in and then quickly learned about some of the weaknesses of gif.

Displaying a large gif or too many overwhelmed my browser's memory.  A common
solution is to display the gif as a \`<video>\` element.  [Gfycat](http://gfycat.com/) is a
service that converts gifs into video files and hosts them thru AWS.

I thought, this might be a good candidate for encapsulation in a polymer
component, so I wrote [\`gfy-cat\`](http://mattbow.com/gfy-cat).
Source [here](https://github.com/mattybow/gfy-cat).

Testing this on multiple browsers was a pain to say the least.  In the end,
writing gfy-cat was a good experience in trying to write
a piece of software intended for use by other developers.  There are a lot of
casese to consider`;

const IMPLEMENTATION = `
### [IE and svgs](http://1pxsolidtomato.com/2014/10/08/quest-for-scalable-svg-text/)

Svgs without a height specified, despite the \`<svg>\` having the \`viewBox\`
attribute, IE will default the height to 150px.  The solution was what is known
as the [intrisic aspect ratio trick](http://alistapart.com/article/creating-intrinsic-ratios-for-video/).
This uses padding-bottom, which causes the below problem.


### [Firefox and padding-bottom](http://stackoverflow.com/questions/23717953/padding-bottom-top-not-working-in-flexbox-layout-firefox)

With flexbox, firefox assesses padding-bottom differently than all other browsers.
Normally, padding-bottom is calculated off the width, but according to the
[stack answer](http://stackoverflow.com/questions/23717953/padding-bottom-top-not-working-in-flexbox-layout-firefox),
firefox is the only one following the spec correctly and basing it off the respective dimension.


### [iOS safari and \`<video>\`](https://developer.apple.com/library/safari/documentation/audiovideo/conceptual/using_html5_audio_video/device-specificconsiderations/device-specificconsiderations.html)

iOS safari doesn't support \`loop\`, \`autoplayback\`, loading of metadata on
page load, \`playbackRate\`, simultaneous playback of multiple videos.  The
worst part of these unsupported behaviors is the metadata which tells us what
the aspect ratio is.  As a result, for iOS devices, I set the height equal to
the width and then when the user clicks play, on \`loadedmetadata\` event, I
resize the height to match the video.

### [IE and polymer bindings in inline style](https://code.google.com/p/dart/issues/detail?id=17075)

In IE, data bindings in the inline style attribute don't work and you need to
put a \`_\` infront of style.  Crazy.

### file paths

When building the dist files for a [bower](http://bower.io/docs/creating-packages/)
package, it's probable that you'll need to restructure any paths that you're
 using in dev because in the download, it'll likely go into a bower_components
 folder and then into it's own folder.  I used
 [grunt-replace](https://github.com/outaTiME/grunt-replace) to fix
 and flatten my files.
`

export default class GfyPage extends Component{
  render(){
    const details = {
      title:"Gfy-cat",
      date:"November 2014",
      technologies:["polymer", "grunt", "bower"],
      description:"A polymer webcomponent for displaying gifs as video elements",
      site:"http://mattbow.com/gfy-cat/"
    }
    return <ProjectView details={details}
                        imageUrl="/images/gfy-cat-banner.png">
      <SingleCol>
        <div className="project-text-heading">CONCEPT</div>
        <Markdown source={CONCEPT_TEXT} />
        <div className="project-text-heading">IMPLEMENTATION</div>
        <div>
          <Markdown source={IMPLEMENTATION} />
        </div>
      </SingleCol>
    </ProjectView>
  }
}
