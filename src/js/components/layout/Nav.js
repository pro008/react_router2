import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const ArticlesClass = location.pathname === "/" ? "active" : "";
    const AddClass = location.pathname.match(/^\/adds/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div class="course-cards-grid" >
        <div class="jumbotron jumbotron-header-bar jumbotron-header-bar--tabs bg-red-force">
          <div class="container">
            <div class="jumbotron-header-bar__inner">
              <div>
                <h1>Simple React</h1>
              </div>
            </div>

            <ul class="nav nav-tabs" role="tablist">
              <li class={ArticlesClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>List Articles</IndexLink>
              </li>
              <li class={AddClass}>
                <Link to="adds" onClick={this.toggleCollapse.bind(this)}>Add Article</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
