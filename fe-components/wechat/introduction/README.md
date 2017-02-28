# 微信小程序——指南

## 产品定位及功能介绍
>微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。

## 小程序注册

### 注册小程序账号
>在微信公众平台官网首页（mp.weixin.qq.com）点击右上角的“立即注册”按钮。

![注册小程序账号](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/a.png?t=2017117)

### 选择注册的帐号类型
>选择“小程序”，点击“查看类型区别”可查看不同类型帐号的区别和优势。

### 填写邮箱和密码
>请填写未注册过公众平台、开放平台、企业号、未绑定个人号的邮箱。

### 激活邮箱
>登录邮箱，查收激活邮件，点击激活链接。

### 填写主体信息
>点击激活链接后，继续下一步的注册流程。请选择主体类型选择，完善主体信息和管理员信息。

### 选择主体类型

![选择主体类型](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/1.png?t=2017117)

#### 主体类型说明如下

<table>
    <tr>
        <td>账号主体</td>
        <td>范围</td>
    </tr>
    <tr>
        <td>企业</td>
        <td>企业、分支机构、企业相关品牌。</td>
    </tr>
    <tr>
        <td>企业（个体工商户）</td>
        <td>个体工商户。</td>
    </tr>
    <tr>
        <td>政府</td>
        <td>国内、各级、各类政府机构、事业单位、具有行政职能的社会组织等。目前主要覆盖公安机构、党团机构、司法机构、交通机构、旅游机构、工商税务机构、市政机构等。</td>
    </tr>
    <tr>
        <td>媒体</td>
        <td>报纸、杂志、电视、电台、通讯社、其他等。</td>
    </tr>
    <tr>
        <td>其他组织</td>
        <td>不属于政府、媒体、企业或个人的类型。</td>
    </tr>
</table>

#### 填写主体信息并选择验证方式
*企业类型帐号可选择两种主体验证方式。 方式一：需要用公司的对公账户向腾讯公司打款来验证主体身份。打款信息在提交主体信息后可以查看到。 方式二：通过微信认证验证主体身份，需支付300元认证费。认证通过前，小程序部分功能暂无法使用。

![主体信息登记](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/2.png?t=2017117)

*政府、媒体、其他组织类型帐号，必须通过微信认证验证主体身份。认证通过前，小程序部分功能暂无法使用。

![主体信息登记](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/3.png?t=2017117)

*微信认证入口：登录小程序 - 设置 - 微信认证详情

![主体信息登记](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/w.png?t=2017117)

#### 填写管理员
![填写管理员](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/4.png?t=2017117)

#### 确认主体信息不可变更
![确认主体信息不可变更](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/5.png?t=2017117)

#### 点击确认完成注册流程
>选择对公打款的用户，请根据页面提示，向指定的收款帐号汇入指定金额。 *注意：请在10天内完成汇款，否则将注册失败*

![打款](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/6.png?t=2017117)
    
>选择通过微信认证验证主体身份的用户，完成注册流程后请尽快进行微信认证，认证完成之前部分功能暂不可使用。


## 小程序信息完善及开发前准备

### 登录小程序管理平台
>完成注册后，在微信公众平台官网首页（mp.weixin.qq.com）的登录入口直接登录

![登录小程序管理平台](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/a.png?t=2017117)

### 完善小程序信息
>**完成注册后，微信小程序信息完善步骤和开发可同步进行。**

>选择对公打款的用户，完成汇款验证后，可以补充小程序名称信息，上传小程序头像，填写小程序介绍并选择服务范围。

![小程序发布流程](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/u.png?t=2017117)

>选择通过微信认证验证主体身份的用户，需先完成微信认证后，才可以补充小程序名称信息，上传小程序头像，填写小程序介绍并选择服务范围。 

![小程序发布流程](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/7.png?t=2017117)

**提示：**
>如果选择了特殊行业的服务类目，需要提供资质材料提交审核。点击查看所需资质材料

## 开发前准备

### 绑定开发者
>登录微信公众平台小程序，进入用户身份- 开发者，新增绑定开发者。
>已认证的小程序可以绑定不多于20个开发者。未认证的小程序可以绑定不多于10个开发者。

![绑定开发者](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/h.png?t=2017117)

### 获取AppID
>进入“设置-开发设置”，获取AppID信息。

![获取AppID](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/i.png?t=2017117)

### 阅读开发文档并下载开发者工具
>点击页面右上角文档-开发，详细阅读开发者文档并进入下载页面，下载开发者工具。

## 开发者工具的使用

### 下载并安装开发者工具

### 登录
>开发者工具使用管理员或者绑定的开发者微信号扫码登录。

![登录](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/k.png?t=2017117)

### 创建项目
>小程序的管理员或已绑定的开发者可以创建项目。需要填写AppID、项目名称及本地开发目录。

![创建项目](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/l.png?t=2017117)

![创建项目](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/m.png?t=2017117)

### 开发
>管理员和开发者可在开发者工具内完成小程序的开发、调试、预览、上传代码等操作。

![创建项目](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/n.png?t=2017117)

### 预览
>小程序的管理员或是开发者可点击左侧“项目”，进入上传/预览页面。点击“预览”，开发者可用本人微信扫码，在手机内预览小程序的效果。

>**注意：**

>*开发工具上的二维码仅限于登录开发工具的开发者本人可以扫码并预览，其他人无法扫码预览。
>*请用微信客户端iOS或Android的6.3.27及以上版本才可以扫码预览。

![预览](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/o.png?t=2017117)

### 上传代码
> 小程序的管理员可点击左侧“项目”，进入上传/预览页面，使用管理员本人微信号扫码确认上传。 
> **注意：**
>*只有管理员有权限可以上传，开发者没有权限上传。

![上传代码](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/p.png?t=2017117)

>代码上传后可在微信公众平台（mp.weixin.qq.com），开发管理页面中看到对应提交的版本。

![上传代码](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/q.png?t=2017117)


## 代码审核与发布

### 提交审核
>登录微信公众平台小程序，进入开发管理，开发版本中展示已上传的代码，管理员可提交审核或是删除代码。

![提交审核](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/q.png?t=2017117)

## 审核信息填写

### 绑定测试帐号（选填）
>该微信号将提供给微信审核人员审核微信小程序时登录使用，测试微信号需能够体验小程序的全部功能，请勿使用常用微信号扫描。

![审核信息填写](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/r.png?t=2017117)

### 配置功能页面
>为了用户可以快速搜索出小程序，需要填写重要业务页面的类目与标签。重要业务页面组数不多于5组。

![配置功能页面](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/s.png?t=2017117)

### 完成提交
>提交审核完成后，开发管理页中审核版本模块展示审核进度。

![完成提交](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/t.png?t=2017117)

>**提示：**
>*开发者可参考《微信小程序平台常见拒绝情形》，详细了解审核标准。

### 代码发布
>代码审核通过，需要开发者手动点击发布，小程序才会发布到线上提供服务。

>**注意：** 内测期间，代码发布按钮不可点击。


## 小程序申请微信认证

>政府、媒体、其他组织类型帐号，必须通过微信认证验证主体身份。企业类型帐号，可以根据需要确定是否申请微信认证。已认证帐号可使用微信支付、微信卡券等高级权限。

>认证入口：登录小程序—设置—基本设置—微信认证—详情

![小程序申请微信认证](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/x.png?t=2017117)

## 小程序申请微信支付

>已认证的小程序可申请微信支付。

![小程序申请微信支付](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/y.png?t=2017117)

## 小程序绑定微信开放平台帐号

>小程序绑定微信开放平台帐号后，可与帐号下的其他移动应用、网站应用及公众号打通，通过UnionID机制满足在多个应用和公众号之间统一用户帐号的需求。

>**UnionID机制说明：**如果开发者拥有多个移动应用、网站应用、和公众帐号（包括小程序），可通过UnionID来区分用户的唯一性，因为只要是同一个微信开放平台帐号下的移动应用、网站应用和公众帐号（包括小程序），用户的unionid是唯一的。换句话说，同一用户，对同一个微信开放平台下的不同应用，UnionID是相同的。用户的UnionID可通过调用“获取用户信息”接口获取。

>了解“获取用户信息”接口请查看开发文档—API—开放接口—用户信息。

>**绑定小程序流程说明：**登录微信开放平台（open.weixin.qq.com）—管理中心—公众帐号—绑定公众帐号

![小程序绑定微信开放平台帐号](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/z.png?t=2017117)

**注意：微信开放平台帐号必须完成开发者资质认证才可以绑定小程序。**