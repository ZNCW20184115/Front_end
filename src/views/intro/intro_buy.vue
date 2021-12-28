<template>
    <div class="mainbox">
		<h2>员工管理系统年费套餐</h2>
		<div class="responsive">
			<table>
			<tbody>
				<tr>
					<th style="background:#e4644a;">年费套餐</th>
					<th style="background:#8035fb;border-right:2px solid #fff;">仙贝版<span style="display:block;font-size:12px; line-height:1em; font-weight:normal;">(品牌加盟推荐型)</span></th>
					<th style="background:#eb4848;border-right:2px solid #fff;">plus版</th>
					<th style="background:#f37815;border-right:2px solid #fff;">标准版</th>
					<th style="background:#fe0597;border-right:2px solid #fff;">基础版</th>
					<th style="background:#35c6f0;">展示版</th>
				</tr>
				<tr>
					<td>费用（元/年）</td>
					<td class="red">114514</td>
					<td class="red">8888</td>
					<td class="red">7777</td>
					<td class="red">5160</td>
					<td class="red">2042</td>
				</tr>
				<tr>
					<td>支持员工人数</td>
					<td>60000</td>
					<td>60000</td>
					<td>15000</td>
					<td>7000</td>
					<td>200</td>
				</tr>
				<tr>
					<td>员工信息查询</td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
				</tr>
				<tr>
					<td>员工查询请求</td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td>/</td>
					<td>/</td>
				</tr>
				<tr>
					<td>手机小程序</td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td>/</td>
					<td>/</td>
					<td>/</td>
				</tr>
				<tr>
					<td>1对1服务</td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td>/</span></td>
					<td>/</span></td>
				</tr>
				<tr>
					<td>永久更新</td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
					<td><span class="gou"></span></td>
				</tr>
				<tr>
					<td>员工能力图表</td>
					<td style="box-shadow: #8035fb 0px 6px 0px; border-radius:0px 0px 5px 5px;padding-bottom:8px;"><span class="gou"></span></td>
					<td style="box-shadow: #eb4848 0px 6px 0px; border-radius:0px 0px 5px 5px;padding-bottom:8px;"><span class="gou"></span></td>
					<td style="box-shadow: #f37815 0px 6px 0px; border-radius:0px 0px 5px 5px;padding-bottom:8px;"><span class="gou"></span></td>
					<td style="box-shadow: #fe0597 0px 6px 0px; border-radius:0px 0px 5px 5px;padding-bottom:8px;">/</td>
					<td style="box-shadow: #35c6f0 0px 6px 0px; border-radius:0px 0px 5px 5px;padding-bottom:8px;">/</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<style scoped>
*{
	padding: 0 0;
	margin: 0 0;
}
body{
	font-size:18px;
    color:#303030;
}
img{
	border: none;
}
p,ul{
	padding: 0 ;
	margin: 0 0;
}
ul li{
	list-style: none;
}
a{
	color:#4d4d4d;
	text-decoration:none;
}
h1,h2,h3,h4{
    font-weight: normal;
}

.mainbox{
    width:1200px;
    margin-left: auto;
    margin-right: auto;
	margin-bottom: 100px;
}
.mainbox h2 {
    margin: 0px auto;
    font-size: 36px;
    line-height: 2em;
    text-align: center;
    position: relative;
}
.responsive {
    margin:25px 0 0 0;
}
.mainbox table {
    border-collapse: collapse;
    border-top: 0!important;
    width: 100%;
}
.mainbox table th {
    color: #fff;
    height: 75px;
    min-width: 80px;
    max-width: 60px;
    white-space: nowrap;
    border: none;
    border-radius: 10px 10px 0px 0px;
}
.mainbox table th, .mainbox table td {
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    background: #fff;
}
.mainbox .red {
    color: #e40202;
}
.mainbox tr:nth-child(2n+1) td{
    background:#f1f1f1;
}
.mainbox table td {
    border: 1px #e9edf1 solid;
    border-right: 1px #d1d1d1 solid;
}
.gou {
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(../../assets/images/gou.gif);
}
</style>