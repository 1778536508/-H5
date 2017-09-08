
{{#each contents}}
	<li>
		<div class="forma_imaGes">
			<a href="http://project.efeiyi.com/p/m/{{id}}.html">
				<img src="{{getContent contentFragmentList 112}}"/>
				<p class="forma_imaGes_text">{{getContent contentFragmentList 9}}</p>
			</a>
		</div> 
		<div class="forma_duce">
			<div class="forma_duce_float">
				<h3>{{getContent contentFragmentList 4}}</h3>
				<div>
					<a href="javascript:;">
						<img src="assets/iocn/Fill 1.png"/>
						<img src="assets/iocn/Fill-1.png"/>
						<span>0</span>
					</a>
				</div>
			</div>
			<p class="list_P_id" data_list_p="{{ichCategoryId}}"></p>
		</div>
	</li>
{{/each}}


{{#each content_inherit}}
	<li>
		<div class="forma_imaGes">
			<a href="http://project.efeiyi.com/m/m/{{id}}.html">
				<img src="{{getContent contentFragmentList 113}}" class="conImg"/>
				<p class="forma_imaGes_text">{{getContent contentFragmentList 13}}</p>
			</a>
		</div> 
		<div class="forma_duce">
			<div class="forma_duce_float">
				<h3>{{getContent contentFragmentList 4}}</h3>
				<div>
					<a href="javascript:;">
						<img src="assets/iocn/Fill 1.png"/>
						<img src="assets/iocn/Fill-1.png"/>
						<span>0</span>
					</a>
				</div>
			</div>
			<p class="list_P_id" data_list_p="{{ichCategoryId}}"></p>
		</div>
	</li>
{{/each}}



