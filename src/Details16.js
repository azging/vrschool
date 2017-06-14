import React, { Component } from 'react';
import './details.css';
var $ = require('jquery');

class Details extends Component {
  render() {
    return (
      <section class="detail">
        <section className="top-bg">
          <img src="static/image/slider1.png" className="top-image"/>
        </section>
        <section className="detail-box">
          <section className="nav-box">
            <div className="detail-nav">
              <p>新闻动态 / 行业资讯 / <span className="current-nav">新闻详情</span></p>
            </div>
            <div className="detail-time">
              <p>2016-12-30</p>
            </div>
          </section>
          <section className="content-box">
            <h1 className="news-title">中国的ARVR产业链已经做到世界级</h1>
            <section className="news-content">
              <p>作为下一代计算平台的VR/AR正在全球范围内掀起新一轮技术革命。通过对终端产品、国产芯片、微型显示、交互技术、光学器件、开发引擎、全景相机、行业应用等产业链进行系统梳理，本文全面展示了中国VR产业生态的真实状况：虽然我国VR生态并不完整、生态型企业缺失，但在部分核心器件上已取得重大突破，在部分领域已经具备与世界先进企业比拼的实力。</p>
              <p>终端产品：已走在世界前列</p>
              <p>我国VR显示终端一直走在世界的最前沿，但是缺乏生态型公司的引领，影响力不足。一提到VR/AR，最常说的是Facebook、Valve、谷歌和微软，而不是国内的BAT。倒是国内的一些创业公司十分活跃，它们经常推出一些超前的产品，在参数上并不比Facebook、Valve、谷歌和微软差。</p>
              <p>HTC Vive核心技术来源是Valve，可将其归类到Valve阵营。而中国其他创业公司Hypereal、大朋、IDEALENS、多哚等各有亮点。其中Hypereal的VR头盔Pano在某些参数上比Oculus Rift、PS VR的更好，搭载2K AMOLED屏幕，刷新率达到90Hz，画面延时低于16ms，视场角为120度。其自主研发的激光定位方案，可以让使用者在一个30平方米的范围内，准确定位到头部和双手控制器的位置(毫米级精度)。</p>
              <p>除了在参数上比拼之外，国内创业公司还在轻薄设计上下了不少工夫。VR头盔向VR眼镜方向发展是必然趋势。多哚V1智能眼镜仅重88克，厚度16mm，搭载2K高清解析，实现105度的视角场。</p>
              <p>在VR一体机上，国内创业公司同样走在前头。前两年不少创业公司推出VR一体机，那时候国外巨头大部分还停留在参考设计上。大朋和IDEALENS的VR一体机搭载2K级分辨率、90Hz刷新率的OLED屏，整体时延都低于20ms。现在这些公司都在研究由内向外交互技术，希望能够再一次引领VR一体机的发展。</p>
              <p>与VR相比，巨头更看好AR的未来。国内同样涌现一批具有技术实力的AR创业公司。耐德佳AR眼镜NED+X1视场角(FOV)超过40度，比Hololens视场角提升20%以上;其光学分辨率高达1920×1080，是国际上首款全高清AR智能眼镜。</p>
              <p>悉见科技SeengeneX1的FOV为42°，重量为166g，比HoloLens轻410g。影创一款兼具AR/VR的头盔Halo，70度视场角，整体时延控制在13ms内。0glass第一代AR眼镜0glass Pro开发者版目前已在国家电网、华为、西门子、江铃汽车和两个军工企业中投入了试点试用。</p>
              <p>在VR还没有跨越早期使用者阶段，按照电脑普及的思路，VR首先应该在B2B2C市场中寻找机会，通过借B端企业的力让产品达到C端用户。此前，已经有一些厂商将自己的产品应用到网吧、教育、运营商市场当中，取得了一定的效果。0glass创始人兼CEO苏波认为，真正的“个人消费品”需具备两个条件：一是市场保有量大，二是具备消费黏性。但目前，AR/VR于消费者而言是好奇心多于刚需。因此，2C这条路对AR来说，短期内走不通。</p>
              <p>国产芯片：有三条路径可走</p>
              <p>近两三年来，VR概念的火热引起不少国内移动芯片厂商的跟进，炬芯、全志、瑞芯微、盈方微等陆续推出VR一体机或者全景相机的解决方案。</p>
              <p>炬芯针对VR一体机市场推出了两款芯片——S900VR和V500。雅士VR一体机等多款产品采用的是炬芯S900VR方案，而刚刚展出的VRpad新品采用的是炬芯V500方案。全志目前有H8和H8vr两颗芯片用于VR一体机市场，今年可能会推出性能更强的VR9和VR10芯片。</p>
              <p>与炬芯、全志有所不同，盈方微将目光投向了VR全景相机，推出了C20、C23、C25等多款芯片及方案新品，并提供包括设计资料、生产标定、供应链、生态链、产品上市的“全景方案产品包”。同样，瑞芯微也推出了搭载RV1108芯片的360度VR全景摄像机和搭载RK3399芯片的3D-VR摄像机的解决方案。在此之前，瑞芯微还对先前用于笔记本和智能盒子的RK3288芯片进行改进，推出了VR一体机的解决方案。</p>
              <p>对VR比较热心的主要是二、三线移动芯片厂商，他们对现有的一些芯片进行优化，推出VR一体机的解决方案。过去两年不少下游品牌厂商采用他们的VR一体机解决方案，主打低价和观影体验。</p>
              <p>睿悦信息副总裁刘晓飞表示，这些主打VR一体机的国内移动芯片厂商前期芯片产品性能不是很高，主要是因为他们将之前用于平板电脑、OTT盒子的芯片转用在VR一体机上，接下来他们陆续会针对VR推出一些更高性能的芯片。不管怎么样，这些移动芯片厂商都是全市场布局，每一款芯片都可以用于多个领域，不一定专门针对VR市场。</p>
              <p>而国内一线移动芯片厂商华为海思、联发科、展讯等对VR市场显得十分冷静，并没有急于针对VR推出芯片的解决方案。有人指出，华为海思、联发科芯片在GPU性能方面较弱，如果现在推出VR解决方案，无法保证体验，所以他们正在积极研发更高性能的芯片。</p>
              <p>与国内移动芯片厂商形成鲜明对比的是国内桌面级芯片厂商，他们在VR方面几乎处于一片空白。龙芯、兆芯、海光、飞腾、君正等桌面级芯片厂商绝大多数没有推出过VR产品，只有兆芯去年推出了基于ZX-2000处理器打造的“VR主机+VR网关+VR头盔+智能机顶盒”VR四合一解决方案。</p>
              <p>兆芯产品经理夏飞表示，国内桌面级芯片厂商主要精力投入在CPU研发上，主攻的市场是PC和服务器，没有把目光聚焦在GPU上，所以绝大部分桌面级芯片厂商没有GPU研发团队。而像景嘉微专门做GPU，既可以做集成显卡，又可以做独立显卡，与英伟达和AMD产品相比性能较弱。但是VR产品对CPU、GPU性能要求非常高，所以国内绝大多数桌面级芯片厂商的产品还不支持VR。</p>
              <p>国内芯片厂商在VR上有三种路径可走。第一种是全靠自研发，在专业领域寻求应用市场，由于不可改动，风险较高。第二种是部分自主研发，部分改动别人的产品，但这种方式成本很高，不适合量产。第三种是用别人的核心，应用是自己的，这种方式ARM做得比较好，所以国内移动芯片厂商发展较快。</p>
              <p>对于VR来说，最为关键的是图形处理，所以国内芯片厂商在核心算法上有机会实现突破。但是VR对GPU和CPU性能要求较高，国内芯片厂商一时很难赶上国外厂商，所以需要不断加强自己的能力。</p>
              <p>微型显示：硅基OLED或超韩国</p>
              <p>与芯片截然相反，在VR这一波机遇当中，中国面板厂商并没有落后得太多，甚至有些领域还拥有一定的优势。这是为何呢?</p>
              <p>目前，三星在VR面板领域依然独占鳌头，霸占了绝大部分市场份额。因为集响应速度快、宽视角、刷新频率高、对比度高、蓝光伤害低、低功耗等优点于一身的AMOLED，是VR显示设备的首选。而目前只有三星有能力大批量供应高分辨率的AMOLED，所以三星获得大部分VR终端客户的订单。</p>
              <p>而国内面板厂商只能在一旁观望，因为他们的AMOLED产线不是新建就是在建，生产能力有限，大部分面板供给手机或者手表厂商，而且还无法满足市场需求，所以只有少部分供给VR终端厂商。据了解，天马与和辉可能向国内VR终端厂商提供少量的1K AMOLED显示屏。</p>
              <p>虽然国内面板厂商能力有限，但是他们也不想错过这波趋势，正在积极布局。京东方近两三年来在VR、AR领域动作频频。早在2014年京东方就投资了Meta，2016年又投资了枭龙科技，通过资本快速进入AR领域。同时，京东方还展示出2.8英寸AR显示屏、1600PPI的2.8英寸UHD AR/VR显示屏和5.7英寸UHDVR一体机，并成立AR/VR研究所，将从软件、硬件、内容等多方切入，逐步拓展创新显示领域技术、产品及应用。</p>
              <p>京东方高级副总裁张兆洪表示，将虚拟现实作为DBG显示事业群四大技术形态之一。据了解，不久前，京东方还牵头成立硅基OLED公司，主攻 OLED 微型显示器和AR/VR整机。</p>
              <p>显然，天马、维信诺、和辉在VR、AR上动作没有京东方那么多，但是他们各自都有自己的规划。天马推出了两款5.5英寸HD AMOLED显示屏，能够满足VR显示屏的要求，同时，还展示出一款3.25英寸627PPI的LTPS显示屏。和辉则展出了一款6英寸734PPI的AMOLED面板。维信诺将于2018年推出适用于VR的更高分辨率AMOLED产品。</p>
              <p>某研究所研究员耿怡认为，中国和日韩在OLED上，在LCD上已经没有差距，而硅基OLED甚至已经赶超韩国，因为韩国面板厂商在硅基OLED上没有很强的积累。</p>
              <p>云南北方奥雷德光电科技股份有限公司董事会秘书段先强在接受记者采访时说，硅基OLED的优势是能够实现更高的PPI。现在通过技术提升也解决了可视角度的问题，目前该公司可以实现年产10万片的供货能力，并实现2K分辨率。在1英寸以下的OLED微显领域，目前全球领先的是E-Magin公司，日本和法国也有相关产品，但尚未量产，在这个领域我国是具有话语权的。</p>
              <p>不管是AMOLED，还是硅基OLED，国内面板厂商还未能满足下游VR设备厂商的需求。一方面是因为国内OLED面板厂商主攻的还是手机市场，没有太多的精力投入到VR市场。另一方面硅基OLED面板虽然能解决高PPI的难题，但是生产能力有限、成本过高，还不适合大面积普及。在VR面前，中国面板厂商显然心有余而力不足，因为明明知道VR是下一波趋势，但是目前连手机市场都还无法满足，更无暇顾及VR市场。中国OLED有多重要大家都知道，但是我国一直都处于追赶的状态，挺无奈的。</p>
              <p>值得庆幸的是，VR还处于发展初期，国内面板厂商还在VR的赛道上，还有机会在VR市场中分得一杯羹。所以最重要的就是做好技术储备，等到VR市场爆发的时候，国内面板厂商才能够真正抓住市场机遇。</p>
              <p>交互技术：将成实际标准制定者</p>
              <p>目前，VR显示终端处于发展初期，各大厂商凭借优势采用各自的VR交互解决方案。一时间，带有各种交互方式的VR显示终端充斥市场，有的绑定手柄，有的配备遥控器，有的安装触摸板，甚至有的具有手势识别功能等。这种多种交互形式并存的现状促成了VR交互方式百家争鸣的局面。</p>
              <p>在这两三年里，国内涌现出一大批具有核心竞争力的交互技术企业。刚刚为HTC Vive增加眼动追踪技术的七鑫易维是国内首家拥有自主知识产权的眼球追踪和眼动控制技术的科技公司，去年发布了全球首款VR眼球追踪模组aGlass。在发布会上，英伟达全球副总裁兼中国区总经理张建中认为，七鑫易维眼球追踪技术远远超过全球其他科技公司。</p>
              <p>同样，uSens凌感在手势交互技术方面也较为领先。去年，uSens凌感正式宣布开放SDK测试版并开启预订名叫Fingo的硬件模组。该模组集成了26自由度手势追踪、6自由度位置追踪以及AR/VR技术。</p>
              <p>而在更大的空间定位技术上，国内同样不乏后起之秀。在去年China Joy大会上，HYPEREAL凭借自主研发的交互控制和定位方案，切入VR头盔市场，成为一匹黑马。</p>
              <p>此外，还有获得高通领投的Ximmerse和诺亦藤等。前者旗下有VR输入控制设备MACE、VR万向移动平台Teleport以及光学手势跟踪设备和触觉反馈设备。</p>
              <p>后者开发了具有国际领先水平的“基于MEMS惯性传感器的动作捕捉技术”，并在此基础上形成了一系列具有完全自主知识产权的低成本高精度动作捕捉产品。</p>
              <p>神秘谷数字科技CEO赵阳认为，在虚拟现实交互技术方面，国内外虽然在个别算法上有一些差距，但整体水平差不多。所以国内完全有可能涌现出一些国际顶尖的交互技术公司，甚至成为实际标准制定者的技术提供方。</p>
              <p>目前，国际巨头都在积极布局各种交互技术，因为一方面虚拟现实需要多种交互技术方式，另一方面虚拟现实交互技术还处于高速发展期，还没有完全定型。所以在标准定型之前，国内外顶尖的交互企业都有机会成为这些国际企业的技术提供方。</p>
              <p>但是一般交互技术企业将面临非常大的挑战，如果没法占领技术高地，最终成为生态型企业的合作方，很难分享到生态型企业标准的红利。所以绝大多数交互技术企业只能在专业市场或者细分领域找到自己的位置。比如，在大量不标准的3D画笔、绘画板等领域分得一杯羹。</p>
              <p>光学器件：做到小型化是难题</p>
              <p>目前VR头盔的价格差别很大，从几十块钱的盒子，到预计售价350美元的Oculus消费者版本，“琳琅满目，参差不齐。”中国科学院长春光学精密机械与物理研究所副主任张新向记者介绍，“但原理基本相同，最主要的部件都包括屏幕、陀螺仪、光学镜片以及一些塑料部件。其中对用户沉浸感影响最大的部件是两对光学镜片。”</p>
              <p>而内存大小、主频高低、内核的数量等直观标准无法用来衡量光学镜片的成像效果。“同时，光学的应用还依赖于硬件的计算能力、屏幕刷新率、分辨率等指标，因此对于一款VR/AR产品来说，其各个环节都是相互制约且相辅相成的。”卡尔蔡司大区销售经理刘利辉表示。</p>
              <p>“VR头盔带来的沉浸感，一方面取决于屏幕的大小，另一方面取决于镜片弯折光线的能力。因此，就引出了视场角(Field Of View，FOV)的概念，这也是广大VR厂商经常宣传的一个参数。”浙江大学光电工程研究所教授李海峰说。</p>
              <p>据了解，大部分厂商的FOV都在100°左右，但是实际并非如此。“首先，不像屏幕或内存，FOV没有一个可以明确测量的方法，厂商是否会夸大其词，消费者无法确定;第二，人在观察不处于视野中心的目标时，更倾向于转头，而不是斜眼看。”猫眼视觉的一名工程师向记者表示。一般来说，镜片尺寸越大，人眼会越不容易注意到透镜边缘，沉浸感更好，用户可以较为直观地比较该参数，目前绝大多数VR头盔镜片的尺寸都在50mm左右。</p>
              <p>然而，影响沉浸感的，并非只有这50mm。“VR镜片一般分为球面、非球面、非面透镜三类。其中，成本决定了一切。”李海峰表示，“成本高的，镜面自然就好，效果也随之提高。”“但是我国光学技术始终处在‘跟随者’的位置，不论是在硬件上还是内容上。技术研发没有投入，依旧摆脱不了‘代工’的身份，更别提具有自主的核心技术或是产品了。”张新说。</p>
              <p>AR方面亦是如此。“AR使用的是多透镜组，大致有穿透式、半透半反和棱镜三类。” 李海峰说。据了解，由于依靠其反射效率和重量上的优势，波导元件大有成为AR光学器件主流的趋势。“在这其中，全视波导技术逐渐成为了AR进一步发展的首选。”李海峰说。</p>
              <p>然而，这项技术在国内的发展却十分缓慢。我国目前在自由曲面棱镜方面的技术处于比较领先位置，从成像和穿透角度来说要略强于全视波导。但是劣势是在厚度上，全视波导的厚度是1~2毫米，自由曲面棱镜的厚度大约是1厘米。</p>
              <p>“人体感知的80%是靠视觉，目前中国的近视率已超过33%，在高中以上的人口中更高达70%，而VR头盔的使用人群都集中在高学历人群，他们在使用时如果不佩戴眼镜，往往看不清屏幕上的文字，更谈不上体验所谓的沉浸感了，因此会降低VR设备的普及度。”刘利辉说。</p>
              <p>尽管目前国内的VR头盔都声称不影响400度甚至更高的近视，但是单纯从目前VR市场的遇冷来看，似乎这一矛盾并未完全消除。据了解，Oculus通过配备3组不同度数的镜片来解决这一问题，而国内的VR头盔大都仅有一组镜片。</p>
              <p>“其实，解决近视的问题可以参考单反相机。”刘利辉表示，“单反相机一般都会有一个称为屈光度调节的旋钮，通过转动，在一定范围内的近视使用者也能看清取景器里的图像，而无需佩戴眼镜。而这类型镜头的设计方法已有近百年的历史，是相当成熟的。”如果VR头盔的镜片也由一片以上的镜片构成，则经过设计也可以达到调节屈光度的效果，用户就不需要佩戴眼镜即可使用。</p>
              <p>而针对镜片的工艺问题，张新表示：“目前塑料镜片的压模工艺已经非常成熟，可以压制出光学质量非常高的塑料镜片。对于一个新兴的行业来说，全球范围内的技术研发、软硬件生产，都是处于一个摸索的阶段，因此我国的产品并不输国外同行。需要做的，并不是从某一项技术或是某一环节入手解决，而是需要整个行业的共同投入、研发，做到共同提高。”</p>
              <p>开发引擎：可以从垂直行业切入</p>
              <p>现在VR内容开发者大部分用的是Unity3D、Unreal Engine 4，难道国内没有一款适合VR内容开发的引擎吗?</p>
              <p>一般来说，引擎的兴起与爆款应用相关，而引擎生态的建立除了需要具备完整工具链、易用性等之外，还要看市场环境和进入时机点。以Cocos引擎为例，Cocos引擎是触控科技研发的一款游戏引擎，该引擎的火热与爆款手游《捕鱼达人》有关。锐扬科技联合创始人刘屹指出，在爆款游戏的带动下，Cocos引擎同样赶上了国内手游发展的一波高峰期，上手比较简单，比较适合国内开发者市场。</p>
              <p>所以引擎一般要出爆款应用，通过爆款应用带动更多的使用者，然后不断完善工具链，开放给更多的开发者使用，从而建立起开发者生态。目前，Cocos引擎在中国占有量非常大，不仅能够帮助开发便捷开发游戏，还可以实现VR硬件的对接和输入，Cocos引擎里专门集成VR模式，方便开发者进行VR开发。</p>
              <p>但是现在国内大部分VR引擎公司很难打造出惊艳的C端软件，生存压力比较大。PC端VR头盔虽然体验较好，但是用户很少，而外壳式VR头盔受手机性能限制，体验感不强，所以目前VR还不具备2C的市场环境。</p>
              <p>而且现在资本对VR市场变得更加理性，VR引擎公司为了能够生存下来只能发展B端市场。刘屹说，锐扬科技主要针对家装、房产和教育市场，因为这些领域不需要完整的工具链，只要把渲染和性能做好就行。</p>
              <p>但是更多的VR内容开发者都使用Unity3D、Unreal Engine 4进行开发。这两款引擎主要为游戏打造，工具链比较完整，但是在交互上存在一定的不足。像用Unity3D打造的内容画面表现不是很好，而用Unreal Engine 4开发的内容虽然画面好，但是制作周期比较长。所以国内引擎可以在Unity3D和Unreal Engine 4之间做文章。</p>
              <p>现在国内引擎公司大部分不是先切入游戏市场，而是在家装、地产和教育等垂直行业寻找机会。国内引擎画面表现力上要超过Unity3D，可以在低门槛、快速服务响应速度上做文章，这样才更适合国内定制化B端项目开发。然后通过不断打磨反哺技术根基，打造完整的工具链。</p>
              <p>资本并购：进入大浪淘沙阶段</p>
              <p>资本市场已经从喧嚣转向理性，优质的VR项目仍然能够得到资本的不断输血，而那些缺乏核心竞争力的项目则逐渐退场。</p>
              <p>从去年年初开始，国内VR界还在不断刷新融资纪录。从暴风魔镜2.6亿元的B轮融资到盟云软件4.6亿元全资收购3家VR公司，再到乐视VR融资3亿元，估值30亿元，可以看到资本对VR概念的追逐接近疯狂。</p>
              <p>但是虚拟现实产业处于发展初期，硬件正在普及当中，软件和内容也在探索阶段，完整生态还没有形成，近两三年VR软硬件企业很难通过消费者市场赢利。</p>
              <p>而且自从去年5月证监会叫停上市公司跨界定增收购或者募集资金投向VR行业以来，资本圈对于VR创业公司的投资热潮开始降温，VR寒冬的声音不绝于耳。</p>
              <p>面对这股资本寒冬，有的企业开始裁员，有的解散，有的甚至出现拖欠工资现象。暴风魔镜去年下半年就进行了分拆和裁员，科睿科技则转型做内容，网络传出盛景网联、米多娱乐出现拖欠工资现象。这一切都是资本过热的必然产物。</p>
              <p>但是也有一些企业仍然能够在寒冬中获得资本的青睐。据VRZINC研究院不完全统计，2017年第一季度全球VR/AR行业投资总额超过7.51亿美元，其中国内投资总额超过3.4亿美元。虽然国内投资情况大不如前两年，但是大公司仍然在加紧研发，小公司则不断有融资消息传出。不久前，有消息传出，腾讯今年下半年将推出VR头显，阿里将继续投资Magic leap，等等。创业公司融资消息更是接二连三传出，唯晶科技获2800万元融资，完美幻境获数千万元融资，武汉火游获1500万元天使轮融资等。</p>
              <p>资本进入理性阶段之后，并没有让VR行业进入冰点，反而看到大公司在逐渐推进，创业公司也在寻找生计。一位投资人指出，VR行业的前景是光明的，现在已经有一些VR商业应用创业企业开始盈利了，资本的冷却对于行业是一次洗牌，有利于一些优秀的创业公司脱颖而出。</p>
              <p>行业应用：VR+概念有点早熟</p>
              <p>2014年，Facebook收购Oculus时，Facebook CEO扎克伯格就将VR看作下一代计算平台，这不禁让人将其与互联网、移动互联网进行类比，互联网不只是游戏、影视的平台，通过和各个行业相结合能给相应的行业带来变化，同样，VR与各个行业相结合同样能够提升各个行业的效率。</p>
              <p>于是，国内不少创业公司就试图在VR+上做文章，有些企业确实在VR+概念中收获不小。美房云客开创了“VR+移动互联网+房地产”的模式，让人能够通过VR头盔提前看到逼真的样板间，为消费者看房、购房提供更加真实地体验。</p>
              <p>VR+旅游的概念更是火热，赞那度推出VR内容平台旅行VR App，艺龙发布一批酒店全景视频，空空旅行希望提供客栈的全景视频体验等。它们让更多的人足不出户就可以游遍天下美景。</p>
              <p>最受关注的要属教育，VR+教育同样能够给教育带来革新。近两年来大批公司进入VR+教育领域，希望能够在这一块市场中掘金。北京微视酷、网龙华渔、新东方等企业都在教育中引入VR技术，希望通过VR技术能够给教育带来革新。北京师范大学研制了一个维乐(WiLe)学习系统。在维乐系统，数学公式模型化可以在计算系统中显示出来，如果改变有关参数，展示出了的模型就会发生相应的变化。</p>
              <p>虚拟现实在各个行业的应用才刚开始。中国工程院院士、虚拟现实技术与系统国家重点实验室主任赵沁平认为，与“互联网+”一样，虚拟现实技术也是各行业都可以采用并助力自身发展的一项重要技术。虚拟现实+X(应用领域)成为一种新的发展趋势，虚拟现实技术进入了“+时代”。</p>
              <p>清华大学虚拟现实研究院主任研究员文钧雷表示，在2B行业中，医疗行业是最有钱的行业，虽然他们在医疗行业投的钱不多，但在手术、制药流程等领域的投资都有营收。而且VR在教育、培训、房地产、旅游、工业等领域也有其应用前景。</p>
              <p>但是如果回顾互联网的发展，我们可以发现，互联网+爆发是在互联网发展的成熟阶段，而不是早期阶段，所以VR+的大爆发并不是在虚拟现实的早期阶段，它需要通过游戏、影视等娱乐内容市场让更多的人了解VR，并让VR成为生活中的一部分，那时候VR+时代才会真正到来。</p>
              <p>地方发展：VR产业基地遍地开花</p>
              <p>VR风由商界刮到了政界。近两三年，涌现了一批VR孵化器，特别是去年，福建福州、江西南昌、青岛崂山、湖南长沙、浙江嘉兴等地高调宣布成立VR产业基地，要打造“VR之都”。</p>
              <p>南昌市出台了《关于加快推进南昌市虚拟现实VR产业基地建设的优惠政策》。</p>
              <p>福州市政府对外发布《关于促进VR产业加快发展的十条措施》。</p>
              <p>除了福州、南昌、崂山区之外，北京中关村、黄果树、成都、合肥、安溪、安顺市西秀区等地政府不是已经成立VR产业基地，就是正在筹建当中，这种势头正向全国更广阔地区蔓延。</p>
              <p>它们不止停留在口号，还建立各种VR产业基金。崂山区将成立首期50亿元规模的VR产业引导基金。南昌建立了10亿的天使创投基金以及100亿元的产业基金。长沙成立VR产业基金，首期基金规模30亿元。福建的东湖VR小镇成立首期规模30亿元的VR及创新产业母基金。北斗湾VR/AR小镇所在的贵安公布了十条政策来扶持VR产业的发展。</p>
              <p>地方政府目前正面临转型升级的压力，如果能够抓住VR产业发展的先机，不仅有利于当地供给侧改革的落地，还可以增加税收，提升当地的影响力。但是地方政府缺乏VR人才，无法判断VR的走势以及VR产业发展过程中需要注意的问题。</p>
              <p>有人指出，所谓的全产业链布局、各种VR产业园，可能不是为了发展当地科技产业，而是为了更好的招商引资，从而带动当地地价，从房地产中获取收益。因为目前有些VR产业园并不具备产业发展的基础，例如周边配套不齐全、交通不方便、没有活动区域等。</p>
              <p>而且全国是否真的有那么多VR企业呢?这么多的VR产业基地意义何在呢?是否会因为同质化而出现资源浪费现象呢?毕竟，一哄而上不是什么好事，这在智慧城市发展的过程中已经显现出来，只有真正结合当地产业结构发展VR才有可能给地方带来真正的产业革新。</p>
              <p>从国家层面来说，虚拟现实是技术密集型产业，国内与国际存在一定技术差距，现在大多技术由国外企业掌控，国家应该支持国内企业加紧技术研发，加强虚拟现实关键技术的攻关，形成国内企业的竞争优势，避免国内企业沦为集成商。同时，为了改变智慧城市广撒网的模式，国家应该集聚资源做一些小的VR试点，在试点上实现突破。</p>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Details;
